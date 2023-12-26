import { Router } from "express";

import loginController from "../controllers/login.controller";
import authMiddleware from "../middlewares/auth.middleware";

const urlAwal = "/api/v1";
const loginRoutes = Router();

loginRoutes.post(`${urlAwal}/login`, loginController.login);
loginRoutes.get("/logout", authMiddleware, loginController.logout);

export { loginRoutes };
