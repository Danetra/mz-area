import * as Yup from "yup";
import Address from "../models/Address";
import User from "../models/User";
import Store from "../models/Store";
import Category from "../models/Category";
import SubCategory from "../models/SubCategory";
import Product from "../models/Product";
import ProductImages from "../models/ProductImage";
import Province from "../models/Province";
import City from "../models/City";

import multer from "multer";
import url from "url";

import { Op, Sequelize } from "sequelize";
import {
  BadRequestError,
  UnauthorizedError,
  ValidationError,
} from "../utils/ApiError";

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

let productController = {
  add: async (req, res, next) => {
    try {
      const validated = Yup.object().shape({
        storeId: Yup.number().required(),
        categoryId: Yup.number().required(),
        userId: Yup.number().required(),
        name: Yup.string().required(),
        slug: Yup.string().required(),
        altName: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.string().required(),
        published: Yup.number().required(),
        status: Yup.number().required(),
      });

      upload(req, res, async (err) => {
        if (err) {
          // Tangani error upload file, jika ada
          return res.status(400).json({ error: "File upload error." });
        }

        const createdBy = parseInt(req.body.userId);
        const updatedBy = parseInt(req.body.userId);

        const insertProduct = {
          storeId: parseInt(req.body.storeId),
          categoryId: parseInt(req.body.categoryId),
          name: req.body.name,
          slug: req.body.slug,
          altName: req.body.altName,
          description: req.body.description,
          price: parseInt(req.body.price),
          published: parseInt(req.body.published),
          status: parseInt(req.body.status),
          createdBy: createdBy,
          updatedBy: updatedBy,
        };

        const product = await Product.create(insertProduct);

        // // Single Image
        // const insertImages = {
        //   productId: product.id,
        //   name: imageName,
        //   createdBy: createdBy,
        //   updatedBy: updatedBy,
        // };

        const insertImages = images.map((imageName) => ({
          productId: product.id,
          name: imageName,
          createdBy: createdBy,
          updatedBy: updatedBy,
        }));

        console.log(insertImages);

        const image = await ProductImages.bulkCreate(insertImages);

        images.length = 0;

        const callback = {
          status: 200,
          message: "Input Success",
        };
        if (product && image) return res.status(200).json(callback);
      });
    } catch (error) {
      next(error);
    }
  },

  get: async (req, res, next) => {
    try {
      const page = req.query.page ? parseInt(req.query.page) : null;
      const totalDocs = await Product.count();

      const pagination = () => {
        if (req.query.paginate === "true") {
          const limit = req.query.limit ? parseInt(req.query.limit) : 10;
          const offset = limit * (page - 1);
          const totalPage = totalDocs;

          return {
            page,
            offset,
            limit,
            totalPage,
            where: {
              deletedAt: null,
              deletedBy: null,
            },
            order: [["createdAt", "DESC"]],
            include: [
              {
                model: Store,
                as: "store",
              },
              {
                model: Category,
                as: "category",
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
        } else {
          let query = {};
          Object.keys(req.query)
            .filter((item) => item != "paginate")
            .map((item) => {
              query = {
                ...query,
                [item]: {
                  [Op.iLike]: `%${req.query[item]}%`,
                },
              };
            });

          return {
            where: {
              ...query,
            },
            include: [
              {
                model: Store,
                as: "store",
              },
              {
                model: Category,
                as: "category",
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
        }
      };

      const data = await Product.findAll(pagination());

      const products = await Promise.all(
        data.map(async (product) => {
          const images = await ProductImages.findAll({
            where: { productId: product.id },
          });

          const subsCat = await SubCategory.findAll({
            where: { categoryId: product.categoryId },
          });

          const subCat = subsCat.map((sc) => {
            const datCat = {
              id: sc.id,
              name: sc.name,
            };

            return datCat;
          });

          const imagesUrl = images.map((image) => {
            const imageUrl = url.resolve(
              req.protocol + "://" + req.get("host"),
              `/assets/img/products/${image.name}`,
            );

            const formImage = {
              id: image.id,
              url: imageUrl,
            };
            return formImage;
          });

          const full = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: {
              id: product.category.id,
              name: product.category.name,
            },
            subcategory: subCat,
            price: product.price,
            description: product.description,
            published: product.published === 1 ? "PUBLISHED" : "DRAFT",
            images: imagesUrl,
            store: {
              name: product.store === null ? null : product.store.name,
              slug: product.store === null ? null : product.store.slug,
              official: product.store.official,
              address: product.store.address,
              province: product.store.provinceId,
              city: product.store.cityId,
              district: product.store.districtId,
              village: product.store.villageId,
            },
            created: product.created === null ? null : product.created.name,
            updated: product.updated === null ? null : product.updated.name,
            deleted: product.deleted === null ? null : product.deleted.name,
          };

          return full;
        }),
      );

      // console.log(products);

      return res.status(200).json({
        data: {
          docs: products,
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

  getPublic: async (req, res, next) => {
    try {
      const page = req.query.page ? parseInt(req.query.page) : null;
      const totalDocs = await Product.count();

      const pagination = () => {
        if (req.query.paginate === "true") {
          const limit = req.query.limit ? parseInt(req.query.limit) : 10;
          const offset = limit * (page - 1);
          const totalPage = totalDocs;

          return {
            page,
            offset,
            limit,
            totalPage,
            where: {
              deletedAt: null,
              deletedBy: null,
            },
            order: [["createdAt", "DESC"]],
            include: [
              {
                model: Store,
                as: "store",
              },
              {
                model: Category,
                as: "category",
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
        } else {
          let query = {};
          Object.keys(req.query)
            .filter((item) => item != "paginate")
            .map((item) => {
              query = {
                ...query,
                [item]: {
                  [Op.iLike]: `%${req.query[item]}%`,
                },
              };
            });

          return {
            where: {
              ...query,
            },
            include: [
              {
                model: Store,
                as: "store",
              },
              {
                model: Category,
                as: "category",
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
        }
      };

      const data = await Product.findAll(pagination());

      const products = await Promise.all(
        data.map(async (product) => {
          const images = await ProductImages.findAll({
            where: { productId: product.id },
          });

          const subsCat = await SubCategory.findAll({
            where: { categoryId: product.categoryId },
          });

          console.log(subsCat);

          const subCat = subsCat.map((sc) => {
            const datCat = {
              id: sc.id,
              name: sc.name,
            };

            return datCat;
          });

          const imagesUrl = images.map((image) => {
            const imageUrl = url.resolve(
              req.protocol + "://" + req.get("host"),
              `/assets/img/products/${image.name}`,
            );

            const formImage = {
              id: image.id,
              url: imageUrl,
            };
            return formImage;
          });

          const full = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: {
              id: product.category.id,
              name: product.category.name,
            },
            subcategory: subCat,
            price: product.price,
            description: product.description,
            published: product.published === 1 ? "PUBLISHED" : "DRAFT",
            images: imagesUrl,
            store: {
              name: product.store === null ? null : product.store.name,
              slug: product.store === null ? null : product.store.slug,
              official: product.store.official,
              address: product.store.address,
              province: product.store.provinceId,
              city: product.store.cityId,
              district: product.store.districtId,
              village: product.store.villageId,
            },
            created: product.created === null ? null : product.created.name,
            updated: product.updated === null ? null : product.updated.name,
            deleted: product.deleted === null ? null : product.deleted.name,
          };

          return full;
        }),
      );

      // console.log(products);

      return res.status(200).json({
        data: {
          docs: products,
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

  getProductById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await Product.findAll({
        where: { id: id },
        include: [
          {
            model: Store,
            as: "store",
          },
          {
            model: Category,
            as: "category",
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
      });

      if (!data)
        return res
          .status(404)
          .send({ status: 404, message: "Product is Not Exist" });

      data.map((store) => {
        if (store.deletedAt != null || store.deletedBy != null)
          return res
            .status(400)
            .send({ status: 404, message: "Product was deleted" });
      });

      const products = await Promise.all(
        data.map(async (product) => {
          const images = await ProductImages.findAll({
            where: { productId: product.id },
          });

          const subsCat = await SubCategory.findAll({
            where: { categoryId: product.categoryId },
          });

          console.log(subsCat);

          const subCat = subsCat.map((sc) => {
            const datCat = {
              id: sc.id,
              name: sc.name,
            };

            return datCat;
          });

          const imagesUrl = images.map((image) => {
            const imageUrl = url.resolve(
              req.protocol + "://" + req.get("host"),
              `/assets/img/products/${image.name}`,
            );
            return imageUrl;
          });

          const full = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: {
              id: product.category.id,
              name: product.category.name,
            },
            subCategory: subCat,
            price: product.price,
            description: product.description,
            published: product.published === 1 ? "PUBLISHED" : "DRAFT",
            images: imagesUrl,
            store: {
              name: product.store === null ? null : product.store.name,
              slug: product.store === null ? null : product.store.slug,
              official: product.store.official,
              address: product.store.address,
              province: product.store.provinceId,
              city: product.store.cityId,
              district: product.store.districtId,
              village: product.store.villageId,
            },
            created: product.created === null ? null : product.created.name,
            updated: product.updated === null ? null : product.updated.name,
            deleted: product.deleted === null ? null : product.deleted.name,
          };

          return full;
        }),
      );

      return res.status(200).send({
        status: 200,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  },

  getProductByIdPublic: async (req, res, next) => {
    try {
      // const { id } = req.params;
      const { slug } = req.query;

      const data = await Product.findAll({
        where: { slug: slug },
        include: [
          {
            model: Store,
            as: "store",
          },
          {
            model: Category,
            as: "category",
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
      });

      if (!data)
        return res
          .status(404)
          .send({ status: 404, message: "Product is Not Exist" });

      data.map((store) => {
        if (store.deletedAt != null || store.deletedBy != null)
          return res
            .status(400)
            .send({ status: 404, message: "Product was deleted" });
      });

      const products = await Promise.all(
        data.map(async (product) => {
          const images = await ProductImages.findAll({
            where: { productId: product.id },
          });

          const subsCat = await SubCategory.findAll({
            where: { categoryId: product.categoryId },
          });

          const subCat = subsCat.map((sc) => {
            const datCat = {
              id: sc.id,
              name: sc.name,
            };

            return datCat;
          });

          const prov = await Province.findByPk(product.store.provinceId);

          const province = {
            id: prov.id,
            name: prov.name,
          };

          const cty = await City.findByPk(product.store.cityId);

          const city = {
            id: cty.id,
            name: cty.name,
          };

          const imagesUrl = images.map((image) => {
            const imageUrl = url.resolve(
              req.protocol + "://" + req.get("host"),
              `/assets/img/products/${image.name}`,
            );
            return imageUrl;
          });

          const full = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: {
              id: product.category.id,
              name: product.category.name,
            },
            subCategory: subCat,
            price: product.price,
            description: product.description,
            published: product.published === 1 ? "PUBLISHED" : "DRAFT",
            images: imagesUrl,
            store: {
              name: product.store === null ? null : product.store.name,
              slug: product.store === null ? null : product.store.slug,
              official: product.store.official,
              address: product.store.address,
              province: province,
              city: city,
              district: product.store.districtId,
              village: product.store.villageId,
            },
            created: product.created === null ? null : product.created.name,
            updated: product.updated === null ? null : product.updated.name,
            deleted: product.deleted === null ? null : product.deleted.name,
          };

          return full;
        }),
      );

      return res.status(200).send({
        status: 200,
        data: products,
      });
    } catch (error) {
      next(error);
    }
  },

  updateProduct: async (req, res, next) => {
    try {
      upload(req, res, async (err) => {
        if (err) {
          // Tangani error upload file, jika ada
          return res.status(400).json({ error: "File upload error." });
        }

        const { id, imagesLatestId, imagesNew } = req.body;
        const updatedBy = parseInt(req.body.userId);

        const data = await Product.findByPk(id);

        const updateProduct = {
          ...req.body,
          updatedBy: updatedBy,
          updatedAt: new Date(),
        };

        const product = await data.update(updateProduct);

        if (imagesLatestId) {
          const imageProm = await Promise.all(
            images.map(async (imageName) => {
              const formImage = {
                name: imageName,
                updatedBy: updatedBy,
                updatedAt: new Date(),
              };

              const existingImage = await ProductImages.findByPk(
                imagesLatestId,
              );

              if (existingImage) {
                const updatedImage = await existingImage.update(formImage);
              }
            }),
          );
        }

        const callback = {
          status: 200,
          message: "Update Success",
        };

        return res.status(200).json(callback);
      });
    } catch (error) {
      next(error);
    }
  },

  //   delete: async (req, res, next) => {
  //     try {
  //       const { id } = req.params;

  //       const { userId } = req.query;

  //       const data = await Store.findByPk(id);
  //       if (!data)
  //         return res
  //           .status(404)
  //           .send({ status: 404, message: "Data is Not Exist" });

  //       if (data.deletedAt != null || data.deletedBy != null)
  //         return res
  //           .status(400)
  //           .send({ status: 400, message: "Store was Deleted" });

  //       const deleted = await Store.update(
  //         {
  //           deletedAt: new Date(),
  //           deletedBy: userId,
  //         },
  //         {
  //           where: { id: id },
  //         }
  //       );

  //       return res.status(200).send({ status: 200, message: "Delete Success" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },
};

export default productController;
