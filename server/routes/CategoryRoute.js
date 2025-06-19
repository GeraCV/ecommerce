import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.js";

const CategoryRouter = Router()

CategoryRouter.get('/', CategoryController.getAllCategories)


export default CategoryRouter