import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.js";

const CategoryRouter = Router()

CategoryRouter.post('/', CategoryController.getAllCategories)


export default CategoryRouter