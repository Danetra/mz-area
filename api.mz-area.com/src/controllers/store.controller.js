import * as Yup from "yup";
import Address from "../models/Address";
import User from "../models/User";
import Province from "../models/Province";
import City from "../models/City";
import District from "../models/District";
import Village from "../models/Village";
import Store from "../models/Store";
import Product from "../models/Product";
import Category from "../models/Category";
import SubCategory from "../models/SubCategory";
import ProductImages from "../models/ProductImage";

import multer from "multer";
import path from "path";
import fs from "fs";
import url from "url";

import { Op, Sequelize } from "sequelize";
import {
  BadRequestError,
  UnauthorizedError,
  ValidationError,
} from "../utils/ApiError";

let storeController = {
  add: async (req, res, next) => {
    try {
      const validated = Yup.object().shape({
        userId: Yup.number().required(),
        provinceId: Yup.number().required(),
        cityId: Yup.number().required(),
        districtId: Yup.number().required(),
        villageId: Yup.number().required(),
        name: Yup.string().required(),
        official: Yup.number().required(),
      });

      if (!(await validated.isValid(req.body))) throw new ValidationError();

      let { name } = req.body;

      const storeExists = await Store.count({
        where: { name },
      });

      if (storeExists > 0) {
        const response = {
          status: 400,
          message: "Store is Existed",
        };
        return res.status(400).json(response);
      }

      const createdBy = req.body.userId;
      const updatedBy = req.body.userId;

      const insert = {
        ...req.body,
        createdBy: createdBy,
        updatedBy: updatedBy,
      };

      const store = await Store.create(insert);

      const callback = {
        status: 200,
        message: "Input Success",
      };

      if (store) return res.status(200).json(callback);
    } catch (error) {
      next(error);
    }
  },

  get: async (req, res, next) => {
    try {
      const page = req.query.page ? parseInt(req.query.page) : null;
      const totalDocs = await Store.count();

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
                model: User,
                as: "owner",
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
              {
                model: Province,
                as: "province",
              },
              {
                model: City,
                as: "city",
              },
              {
                model: District,
                as: "district",
              },
              {
                model: Village,
                as: "village",
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
                model: User,
                as: "owner",
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
              {
                model: Province,
                as: "province",
              },
              {
                model: City,
                as: "city",
              },
              {
                model: District,
                as: "district",
              },
              {
                model: Village,
                as: "village",
              },
            ],
          };
        }
      };

      const data = await Store.findAll(pagination());

      const stores = data.map((store) => ({
        id: store.id,
        name: store.name,
        description: store.description,
        address: store.address,
        official: store.official,
        owner: store.owner.name,
        created: store.created === null ? null : store.created.name,
        updated: store.updated === null ? null : store.updated.name,
        deleted: store.deleted === null ? null : store.deleted.name,
        province: store.province.name,
        city: store.city.name,
        district: store.district.name,
        village: store.village.name,
      }));

      return res.status(200).json({
        data: {
          docs: stores,
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

  getStoreById: async (req, res, next) => {
    try {
      const { id } = req.params;

      const store = await Store.findAll({
        where: { id: id },
        include: [
          {
            model: User,
            as: "owner",
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
          {
            model: Province,
            as: "province",
          },
          {
            model: City,
            as: "city",
          },
          {
            model: District,
            as: "district",
          },
          {
            model: Village,
            as: "village",
          },
        ],
      });

      if (!store)
        return res
          .status(404)
          .send({ status: 404, message: "Store is Not Exist" });

      store.map((store) => {
        if (store.deletedAt != null || store.deletedBy != null)
          return res
            .status(400)
            .send({ status: 404, message: "Store was deleted" });
      });

      const data = await Product.findAll({
        where: { storeId: id },
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
      });

      const products = await Promise.all(
        data.map(async (product) => {
          const images = await ProductImages.findAll({
            where: { productId: product.id },
          });

          const imagesUrl = images.map((image) => {
            const imageUrl = url.resolve(
              req.protocol + "://" + req.get("host"),
              `/assets/img/products/${image.name}`
            );
            return imageUrl;
          });

          const full = {
            id: product.id,
            name: product.name,
            slug: product.slug,
            category: product.category.name,
            subCategory: product.subcategory.name,
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
        })
      );

      const stores = await store.map((store) => ({
        id: store.id,
        name: store.name,
        description: store.description,
        address: store.address,
        official: store.official,
        owner: store.owner.name,
        created: store.created.name,
        updated: store.updated.name,
        deleted: store.deleted === null ? null : store.deleted.name,
        province: store.province.name,
        city: store.city.name,
        district: store.district.name,
        village: store.village.name,
        products: products,
      }));

      return res.status(200).send({
        status: 200,
        data: stores,
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.body;

      const store = await Store.findByPk(id);

      const updated = await store.update(req.body);

      return res.status(200).json({ status: 200, message: "Update Success" });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const { userId } = req.query;

      const data = await Store.findByPk(id);
      if (!data)
        return res
          .status(404)
          .send({ status: 404, message: "Data is Not Exist" });

      if (data.deletedAt != null || data.deletedBy != null)
        return res
          .status(400)
          .send({ status: 400, message: "Store was Deleted" });

      const deleted = await Store.update(
        {
          deletedAt: new Date(),
          deletedBy: userId,
        },
        {
          where: { id: id },
        }
      );

      return res.status(200).send({ status: 200, message: "Delete Success" });
    } catch (error) {
      next(error);
    }
  },
};

export default storeController;
