import { AuthModel } from "../models/AuthModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import envConfig from "../config/env.js"


export class AuthController {
    static async logIn (req, res){
        const { email, password } = req.body
        let userData = await AuthModel.logIn({ email })
        if(!userData.length) {
            res.status(404).json({message: 'El usuario no existe.'})
            return
        }
        userData = userData[0]
        const passwordHash = userData.password
        const userId = userData.id
        const username = `${userData.name} ${userData.last_name} ${userData.second_last_name}`
        const isValidPassword = await bcrypt.compare(password, passwordHash)

        if(!isValidPassword) {
            res.status(401).json({message: 'Contraseña incorrecta.'})
            return
        }

        const token = jwt.sign({
            data: {id: userId, username: username}
            }, envConfig.SECRET_KEY, { expiresIn: '1h' });


        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'Lax',
            secure: false,
            maxAge: 1 * 60 * 60 * 1000,
            path: '/'
        })

        res.json({data: {name: username}, message: 'Inicio de sesión correctamente.'})
    }

    static async session (req, res) {
         return res.json({data: req.tokendata.data, message: 'Token válido.' });
    }

    static async logOut (req, res) {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'Lax',
            secure: false,
            path: '/'
        })
        res.json({message: 'Sesión cerrada correctamente.'})
    }
}