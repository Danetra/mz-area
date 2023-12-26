import * as Yup from "yup";
import Address from "../models/Address";
import Store from "../models/Store";
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

      const storeExists = await Store.findOne({
        where: { name },
      });

      if (storeExists && storeExists.length > 0) {
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

      console.log(insert);

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
      const users = await User.findAll();

      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
};

export default storeController;
