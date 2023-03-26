import express from "express";
import { registerController } from "../controllers/authController.js";

//router object
const router = express.Router();

//routes
router.post("/register", registerController);

//export
export default router;
