import { Router } from "express"
import { ProductController } from "../controllers/ProductController.js"

const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAllProductsByUser)
ProductRouter.get('/:id', ProductController.getDetailProductById)
ProductRouter.post('/', ProductController.createProduct)
ProductRouter.put('/:id', ProductController.updateProduct)
ProductRouter.delete('/:id', ProductController.deleteProduct)

export default ProductRouter