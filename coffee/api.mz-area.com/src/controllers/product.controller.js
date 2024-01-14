import * as Yup from "yup";
import Address from "../models/Address";
import User from "../models/User";
import Province from "../models/Province";
import City from "../models/City";
import District from "../models/District";
import Village from "../models/Village";
import Store from "../models/Store";
import Category from "../models/Category";
import SubCategory from "../models/SubCategory";
import Product from "../models/Product";
import ProductImages from "../models/ProductImage";

import multer from "multer";
import path from "path";

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
    cb(null, "public/img/products");
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
          subCategoryId: parseInt(req.body.subCategoryId),
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

        console.log(images);

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
                model: SubCategory,
                as: "subcategory",
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
                model: SubCategory,
                as: "subcategory",
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

      const products = data.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        address: product.address,
        official: product.official,
        owner: product.owner.name,
        created: product.created === null ? null : product.created.name,
        updated: product.updated === null ? null : product.updated.name,
        deleted: product.deleted === null ? null : product.deleted.name,
        province: product.province.name,
        city: product.city.name,
        district: product.district.name,
        village: product.village.name,
      }));

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
                model: SubCategory,
                as: "subcategory",
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
                model: SubCategory,
                as: "subcategory",
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

      // const products = data.map((product) => ({
      //   id: product.id,
      //   name: product.name,
      //   description: product.description,
      //   address: product.address,
      //   official: product.official,
      //   owner: product.owner.name,
      //   created: product.created === null ? null : product.created.name,
      //   updated: product.updated === null ? null : product.updated.name,
      //   deleted: product.deleted === null ? null : product.deleted.name,
      //   province: product.province.name,
      //   city: product.city.name,
      //   district: product.district.name,
      //   village: product.village.name,
      // }));

      // return res.status(200).json({
      //   data: {
      //     docs: products,
      //     totalDocs: totalDocs,
      //     page: page,
      //     limit: parseInt(req.query.limit),
      //     totalPage: Math.floor(totalDocs / parseInt(req.query.limit)),
      //   },
      // });
    } catch (error) {
      next(error);
    }
  },

  //   detail: async (req, res, next) => {
  //     try {
  //       const { id } = req.params;

  //       const data = await Store.findAll({
  //         where: { id: id },
  //         include: [
  //           {
  //             model: User,
  //             as: "owner",
  //           },
  //           {
  //             model: User,
  //             as: "created",
  //           },
  //           {
  //             model: User,
  //             as: "updated",
  //           },
  //           {
  //             model: User,
  //             as: "deleted",
  //           },
  //           {
  //             model: Province,
  //             as: "province",
  //           },
  //           {
  //             model: City,
  //             as: "city",
  //           },
  //           {
  //             model: District,
  //             as: "district",
  //           },
  //           {
  //             model: Village,
  //             as: "village",
  //           },
  //         ],
  //       });

  //       if (!data)
  //         return res
  //           .status(404)
  //           .send({ status: 404, message: "Store is Not Exist" });

  //       data.map((store) => {
  //         if (store.deletedAt != null || store.deletedBy != null)
  //           return res
  //             .status(400)
  //             .send({ status: 404, message: "Store was deleted" });
  //       });

  //       const stores = data.map((store) => ({
  //         id: store.id,
  //         name: store.name,
  //         description: store.description,
  //         address: store.address,
  //         official: store.official,
  //         owner: store.owner.name,
  //         created: store.created.name,
  //         updated: store.updated.name,
  //         deleted: store.deleted === null ? null : store.deleted.name,
  //         province: store.province.name,
  //         city: store.city.name,
  //         district: store.district.name,
  //         village: store.village.name,
  //       }));

  //       return res.status(200).send({
  //         status: 200,
  //         data: stores,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

  //   update: async (req, res, next) => {
  //     try {
  //       const { id } = req.body;

  //       const store = await Store.findByPk(id);

  //       const updated = await store.update(req.body);

  //       return res.status(200).json({ status: 200, message: "Update Success" });
  //     } catch (error) {
  //       next(error);
  //     }
  //   },

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
