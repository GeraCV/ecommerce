import jwt from 'jsonwebtoken'
import envConfig from '../config/env.js'

const checkSessionMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token)
            return res.status(401).json({ message: 'El token no fue recibido.' })

        const tokenDataDecoded = jwt.verify(token, envConfig.SECRET_KEY)
        req.tokendata = tokenDataDecoded
        next()
    } catch (err) {
        return res.status(401).json({message: err.message})
    }
}

export default checkSessionMiddleware