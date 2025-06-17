import express, { json } from 'express'
import morgan from 'morgan'

const app = express()
app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(json())

const port = process.env.PORT ?? 3000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})