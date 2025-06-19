import { ProductModel } from "../models/ProductModel.js"

export class ProductController {
    static async getAllProductsByUser (req, res) {
        try {
            const user_id = req.tokendata.data.id
            const products = await ProductModel.getAllProductsByUser({user_id})
            if(!products.length) {
                return res.status(404).json({message: 'No se encontraron resultados.'})
            }

            return res.json({data: products})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }

    static async getDetailProductById (req, res) {
        try {
            const user_id = req.tokendata.data.id
            const product_id = req.params.id
            const onlyProduct = await ProductModel.getDetailProductById({user_id, product_id})
            if(!onlyProduct.length) {
                return res.status(404).json({message: 'No se encontraron resultados.'})
            }

            return res.json({data: onlyProduct[0]})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }

    static async createProduct (req, res) {
        try {
            const {
                name,
                description,
                price,
                company_id,
                category_id
            } = req.body

            const user_id = req.tokendata.data.id

            const creationResult = await ProductModel.createProduct({
                name,
                description,
                price,
                user_id,
                company_id,
                category_id
            })

            if(!creationResult.affectedRows) {
                return res.status(500).json({message: 'Hubo un error al agregar la información.'})
            }
            const product_id = creationResult.insertId
            const createdProduct = await ProductModel.getProductById({user_id, product_id})
            return res.json({data: createdProduct[0], message: "El producto se agregó correctamente."})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }

    static async updateProduct (req, res) {
        try {
            const {
                name,
                description,
                price,
                company_id,
                category_id
            } = req.body

            const user_id = req.tokendata.data.id
            const product_id = req.params.id

            const creationResult = await ProductModel.updateProduct({
                name,
                description,
                price,
                company_id,
                category_id,
                product_id,
                user_id
            })

            if(!creationResult.affectedRows) {
                return res.status(500).json({message: 'Hubo un error al modificar la información.'})
            }

            const updatedProduct = await ProductModel.getProductById({user_id, product_id})
            return res.json({data: updatedProduct[0], message: "El producto se modificó correctamente."})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }

    static async deleteProduct (req, res) {
        try {
            const user_id = req.tokendata.data.id
            const product_id = req.params.id

            const creationResult = await ProductModel.deleteProduct({ product_id, user_id })

            if(!creationResult.affectedRows) {
                return res.status(500).json({message: 'Hubo un error al eliminar la información.'})
            }

            return res.json({message: "El producto se eliminó correctamente."})
        } catch (error) {
            return res
                .status(500)
                .json({message: 'Hubo un error al procesar la solicitud.'})
        }
    }
}