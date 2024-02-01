import { Router } from "express";

import cartController from "../controllers/cart.controller";
import authMiddleware from "../middlewares/auth.middleware";

const publicUrl = "/api/v1";
const adminUrl = "/api/v1/admin";
const cartRoutes = Router();

// Public
// cartRoutes.get(`${publicUrl}/products/`, cartController.getPublic);
// cartRoutes.get(
//   `${publicUrl}/products/detail/:id`,
//   cartController.getProductByIdPublic
// );

// Admin
cartRoutes.get(`${adminUrl}/carts/`, authMiddleware, cartController.get);
cartRoutes.post(`${adminUrl}/carts/add`, authMiddleware, cartController.add);
cartRoutes.put(
  `${adminUrl}/carts/updateQty`,
  authMiddleware,
  cartController.updateQty
);

// cartRoutes.get(
//   `${adminUrl}/products/detail/:id`,
//   authMiddleware,
//   cartController.getProductById
// );

// cartRoutes.get(
//   `${adminUrl}/products/edit/:id`,
//   authMiddleware,
//   cartController.getProductById
// );

// cartRoutes.put(
//   `${adminUrl}/products/update`,
//   authMiddleware,
//   cartController.updateProduct
// );

// cartRoutes.delete(
//   `${adminUrl}/products/delete/:id`,
//   authMiddleware,
//   cartController.delete
// );

export { cartRoutes };
