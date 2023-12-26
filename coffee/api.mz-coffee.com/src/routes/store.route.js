import { Router } from "express";

import storeController from "../controllers/store.controller";
import authMiddleware from "../middlewares/auth.middleware";

const urlAwal = "/api/v1";
const storeRoutes = Router();

storeRoutes.get(`${urlAwal}/store/`, storeController.get);
storeRoutes.post(`${urlAwal}/store/add`, storeController.add);

export { storeRoutes };
