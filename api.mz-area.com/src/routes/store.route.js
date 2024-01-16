import { Router } from "express";

import storeController from "../controllers/store.controller";
import authMiddleware from "../middlewares/auth.middleware";

const publicUrl = "/api/v1";
const adminUrl = "/api/v1/admin";
const storeRoutes = Router();

// Public
storeRoutes.get(`${publicUrl}/store/`, storeController.get);
storeRoutes.get(`${publicUrl}/store/detail/:id`, storeController.getStoreById);

// Admin
storeRoutes.get(`${adminUrl}/store/`, authMiddleware, storeController.get);
storeRoutes.post(`${adminUrl}/store/add`, authMiddleware, storeController.add);
storeRoutes.get(
  `${adminUrl}/store/detail/:id`,
  authMiddleware,
  storeController.getStoreById
);
storeRoutes.put(
  `${adminUrl}/store/update`,
  authMiddleware,
  storeController.update
);
storeRoutes.delete(
  `${adminUrl}/store/delete/:id`,
  authMiddleware,
  storeController.delete
);

export { storeRoutes };
