import express, { json } from 'express'
import morgan from 'morgan'
import ProductRouter from './routes/ProductRoute.js'

const app = express()
app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(json())

app.use('/products', ProductRouter)

const port = process.env.PORT ?? 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})