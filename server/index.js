import express, { json } from 'express'
import morgan from 'morgan'
import ProductRouter from './routes/ProductRoute.js'
import AuthRouter from './routes/AuthRoute.js'
import CategoryRouter from './routes/CategoryRoute.js'
import CompanyRouter from './routes/CompanyRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(json())
app.use(cookieParser())

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)
app.use('/categories', CategoryRouter)
app.use('/companies', CompanyRouter)

const port = process.env.PORT ?? 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})