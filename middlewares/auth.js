
import jwt from 'jwt-simple'
import moment from 'moment'
import {secret} from '../services/jwt.js'
//Metodo de autenticacion
export const ensureAuth = (req, res,next) => {
   //comprobar cabecera de autenticacion
   if(!req.headers.authorization){
      return res.status(403).send({
        status: "error",
        message: "La peticion no tiene la cabecera de autenticacion"
      })
   } 
   //limpiar el token de comillas si las hay
   const token = req.headers.authorization.replace(/['"]+/g, '').replace("Bearer ", '')
   
   try {
    //decodificar el token
    let payload = jwt.decode(token,secret)

    //comprobar si el token ya expiro
    if(payload.exp <= moment.unix()){
        return res.status(401).send({
            status:error,
            message: "El token ha expirado"
        })
    }
    //agregar datos del usuario a la request
    req.user = payload

   } catch (error) {
    return res.status(404).send({
        status:error,
        message: "El token no es válido"
      })
   }
    //Paso al siguiente método
    next()
}
// Comprobar si llega la cabecera de autenticacion

//Decodificar el token

//Agregar datos del usuario a la request


//Paso a ajecucion

