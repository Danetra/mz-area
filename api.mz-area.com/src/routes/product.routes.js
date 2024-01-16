import { Router } from "express";

import productController from "../controllers/product.controller";
import authMiddleware from "../middlewares/auth.middleware";

const publicUrl = "/api/v1";
const adminUrl = "/api/v1/admin";
const productRoutes = Router();

// Public
productRoutes.get(`${publicUrl}/products/`, productController.getPublic);
productRoutes.get(
  `${publicUrl}/products/detail/:id`,
  productController.getProductByIdPublic
);

// Admin
productRoutes.get(
  `${adminUrl}/products/`,
  authMiddleware,
  productController.get
);
productRoutes.post(
  `${adminUrl}/products/add`,
  authMiddleware,
  productController.add
);

productRoutes.get(
  `${adminUrl}/products/detail/:id`,
  authMiddleware,
  productController.getProductById
);

productRoutes.get(
  `${adminUrl}/products/edit/:id`,
  authMiddleware,
  productController.getProductById
);

productRoutes.put(
  `${adminUrl}/products/update`,
  authMiddleware,
  productController.updateProduct
);

// productRoutes.delete(
//   `${adminUrl}/products/delete/:id`,
//   authMiddleware,
//   productController.delete
// );

export { productRoutes };
