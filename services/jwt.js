import jwt from 'jwt-simple'
import moment from 'moment'

//Clave secreta
const secret = process.env.SECRET_KEY

//Metodo para generar token 
const createToken = (user) => {
    const payload = {
        userId: user._id,
        role: user.role,
        iat: moment().unix(),//fecha de emision
        exp: moment().add(7, 'days').unix() //fecha de expiración
    }
    return jwt.encode(payload,secret)
}

export {
    secret,
    createToken
}