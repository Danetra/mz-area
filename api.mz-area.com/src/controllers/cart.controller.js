import * as Yup from "yup";
import User from "../models/User";
import Product from "../models/Product";
import Store from "../models/Store";
import MenuCategory from "../models/MenuCategory";
import ProductImages from "../models/ProductImage";

import multer from "multer";
import url from "url";
import Cart from "../models/Cart";
import Category from "../models/Category";
import SubCategory from "../models/SubCategory";

const timestamp = Date.now();

const images = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/img/products");
  },
  filename: (req, file, cb) => {
    const newFileName = `${timestamp}_${file.originalname}`;
    images.push(newFileName);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage }).array("images", 5);

let cartController = {
  add: async (req, res, next) => {
    try {
      const createdBy = parseInt(req.body.userId);
      const updatedBy = parseInt(req.body.userId);

      const { productId, qty } = req.body;

      const check = await Cart.findAll({ where: { productId: productId } });

      if (check.length > 0) {
        const updatedQty = check[0].qty + 1;

        await check[0].update({ qty: updatedQty, updatedBy: updatedBy });

        const callback = {
          status: 200,
          message: "Input Success",
        };

        return res.status(200).json(callback);
      } else {
        const insertCart = {
          ...req.body,
          createdBy: createdBy,
          updatedBy: updatedBy,
        };

        const cart = await Cart.create(insertCart);

        const callback = {
          status: 200,
          message: "Input Success",
        };

        if (cart) return res.status(200).json(callback);
      }
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res, next) => {
    try {
      const page = req.query.page ? parseInt(req.query.page) : null;
      const totalDocs = await Cart.count();

      const pagination = () => {
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const offset = limit * (page - 1);
        const totalPage = totalDocs;

        return {
          page,
          offset,
          limit,
          totalPage,
          where: {
            userId: req.query.userId,
            deletedAt: null,
            deletedBy: null,
          },
          order: [["createdAt", "DESC"]],
          include: [
            {
              model: MenuCategory,
              as: "menuCategory",
            },
            {
              model: Product,
              as: "product",
              include: [
                {
                  model: Category,
                  as: "category",
                },
                {
                  model: ProductImages,
                  as: "productImages",
                },
              ],
            },
            {
              model: Store,
              as: "store",
            },
            {
              model: User,
              as: "user",
            },
            {
              model: User,
              as: "created",
            },
            {
              model: User,
              as: "updated",
            },
            {
              model: User,
              as: "deleted",
            },
          ],
        };
      };

      const data = await Cart.findAll(pagination());

      const images = [];

      const storeProductsMap = {};

      const carts = await Promise.all(
        data.map(async (item) => {
          const { menuCategory, store, product, qty, price, subCategoryId } =
            item;

          const subsCat = await SubCategory.findAll({
            where: { id: subCategoryId },
          });

          const subCat = subsCat.map((sc) => {
            const datCat = {
              id: sc.id,
              name: sc.name,
            };

            return datCat;
          });

          const image = product.productImages.map((img) => {
            const imgUrl = url.resolve(
              req.protocol + "://" + req.get("host"),
              `/assets/img/products/${img.name}`
            );
            const formImage = {
              id: img.id,
              url: imgUrl,
            };

            images.push(formImage);
          });

          const productInfo = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            qty: qty,
            price: product.price,
            category: {
              id: product.category.id,
              name: product.category.name,
            },
            subcategory: subCat,
            images: images,
          };

          // Jika toko belum ada di map, inisialisasi array produknya
          if (!storeProductsMap[store.id]) {
            storeProductsMap[store.id] = {
              name: store.name,
              slug: store.slug,
              official: store.official,
              products: [productInfo],
            };
          } else {
            // Jika toko sudah ada di map, tambahkan produk ke array produknya
            storeProductsMap[store.id].products.push(productInfo);
          }
        })
      );

      const result = Object.entries(storeProductsMap).map(
        ([storeId, storeInfo]) => ({
          menuCategory: data[0].menuCategory.name, // Ambil kategori dari contoh pertama
          store: storeInfo,
        })
      );

      return res.status(200).json({
        data: {
          docs: result,
          totalDocs: totalDocs,
          page: page,
          limit: parseInt(req.query.limit),
          totalPage: Math.floor(totalDocs / parseInt(req.query.limit)),
        },
      });
    } catch (error) {
      next(error);
    }
  },

  updateQty: async (req, res, next) => {
    try {
      const updatedBy = parseInt(req.body.userId);

      const { productId, qty, storeId } = req.body;

      const check = await Cart.findOne({
        where: { productId: productId, storeId: storeId },
      });

      if (check) {
        const updatedQty = await check.update({
          qty: qty,
          updatedBy: updatedBy,
        });

        const callback = {
          status: 200,
          message: "Input Success",
        };

        if (updatedQty) return res.status(200).json(callback);
      }
    } catch (error) {
      next(error);
    }
  },
};

export default cartController;
