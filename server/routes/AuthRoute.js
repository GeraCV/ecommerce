import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import checkSessionMiddleware from "../middlewares/auth.middleware.js";


const AuthRouter = Router()

AuthRouter.post('/login', AuthController.logIn)
AuthRouter.get('/session', checkSessionMiddleware, AuthController.session)
AuthRouter.post('/logout', checkSessionMiddleware, AuthController.logOut)

export default AuthRouter