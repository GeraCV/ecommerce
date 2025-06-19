import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController.js";
import checkSessionMiddleware from "../middlewares/auth.middleware.js";

const CompanyRouter = Router()

CompanyRouter.use(checkSessionMiddleware)
CompanyRouter.get('/', CompanyController.getAllCompanies)


export default CompanyRouter