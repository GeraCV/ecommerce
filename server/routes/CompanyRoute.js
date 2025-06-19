import { Router } from "express";
import { CompanyController } from "../controllers/CompanyController.js";

const CompanyRouter = Router()

CompanyRouter.get('/', CompanyController.getAllCompanies)


export default CompanyRouter