import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.js";
import checkSessionMiddleware from "../middlewares/auth.middleware.js";

const CategoryRouter = Router()

CategoryRouter.use(checkSessionMiddleware)
CategoryRouter.get('/', CategoryController.getAllCategories)


export default CategoryRouter