import * as Yup from "yup";
import User from "../models/User";
import JwtService from "../services/jwt.service";
import {
  BadRequestError,
  UnauthorizedError,
  ValidationError,
} from "../utils/ApiError";

let loginController = {
  login: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      let { email, password } = req.body;

      const check = await User.findOne({ where: { email } });

      if (!check) throw new BadRequestError();

      if (!(await check.checkPassword(password))) throw new UnauthorizedError();

      const user = {
        id: check.id,
        name: check.name,
        email: check.email,
      };

      const token = JwtService.jwtSign(check.id);

      const response = {
        status: 200,
        message: `Welcome, ${user.name}`,
        data: {
          user,
          token,
        },
      };

      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  logout: async (req, res, next) => {
    try {
      JwtService.jwtBlacklistToken(JwtService.jwtGetToken(req));

      res.status(200).json({ msg: "Authorized" });
    } catch (error) {
      next(error);
    }
  },
};

export default loginController;
