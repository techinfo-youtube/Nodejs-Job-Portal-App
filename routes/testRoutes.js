import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middelwares/authMiddleware.js";

//router object
const router = express.Router();

//routes
router.post("/test-post", userAuth, testPostController);

//export
export default router;
