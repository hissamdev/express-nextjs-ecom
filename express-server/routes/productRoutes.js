import express from "express";
import productController from "../controllers/productController.js";
const router = express.Router();

router.get("/products", productController.getAllProducts);
router.get("/products/:slug", productController.getProduct);

// Seed tables
router.post("/products/seed", productController.createProducts);
router.post("/products/tables/seed", productController.productTable);

export default router;
