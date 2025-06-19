import { CategoryModel } from "../models/CategoryModel.js"

export class CategoryController {

    static async getAllCategories (req, res) {
        try {
            const categories = await CategoryModel.getAllCategories()
            if(!categories.length) {
                return res.status(404).json({message: 'No se encontraron resultados.'})
            }

            return res.json({data: categories})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }
}