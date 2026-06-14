import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users/create", userController.getUsers);

export default router;
