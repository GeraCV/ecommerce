import { CompanyModel } from "../models/CompanyModel.js"

export class CompanyController {

    static async getAllCompanies (req, res) {
        try {
            const companies = await CompanyModel.getAllCompanies()
            if(!companies.length) {
                return res.status(404).json({message: 'No se encontraron resultados.'})
            }

            return res.json({data: companies})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }
}