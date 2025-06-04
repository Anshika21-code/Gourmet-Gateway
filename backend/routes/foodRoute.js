import express from "express";
import { addFoodItem } from "../controllers/foodControllers.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// ✅ Use multer middleware in route
router.post("/add", upload.single("image"), addFoodItem);

export default router;
