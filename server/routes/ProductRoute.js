import { Router } from "express"
import { ProductController } from "../controllers/ProductController.js"
import checkSessionMiddleware from "../middlewares/auth.middleware.js"

const ProductRouter = Router()

ProductRouter.use(checkSessionMiddleware)
ProductRouter.get('/', ProductController.getAllProductsByUser)
ProductRouter.get('/:id', ProductController.getDetailProductById)
ProductRouter.post('/', ProductController.createProduct)
ProductRouter.put('/:id', ProductController.updateProduct)
ProductRouter.delete('/:id', ProductController.deleteProduct)

export default ProductRouter