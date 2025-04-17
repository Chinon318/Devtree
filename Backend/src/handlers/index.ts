import User from "../models/User"
import { Request, Response } from "express"
import { validationResult} from "express-validator"
import slug from "slug"
import { checkPassword, hashPassword } from "../utils/auth"

export const createAccount = async(req : Request, res : Response) =>{
    try {
        
        const { email, password} = req.body 

        const userExists = await User.findOne({email})

        if (userExists) {
            const error = new Error("El usuario ya existe")
            res.status(409).json({msg: error.message}) //409 es el error de conflicto, significa que ya existe un usuario con ese correo
            return
        }


        const handle = slug(req.body.handle,'')
        const handleExists = await User.findOne({handle})
        if (handleExists) {
            const error = new Error("Nombre de usuario no disponible")

            res.status(409).json({msg: error.message}) //409 es el error de conflicto, significa que ya existe un usuario con ese correo
            return
        }


        const user = new User(req.body) //Creamos un nuevo usuario con los datos que nos llegan por el body
        user.password = await hashPassword(password)
        user.handle = handle //Asignamos el handle al usuario
        await user.save()

        //Creamos la respuesta del servidor
        res.status(201).send("Se registro el usuario correctamente") //201 es el código de éxito, significa que se creo el recurso
    } catch (error) {
        console.error("Error al crear la cuenta", error)
        res.status(500).json({msg: "Error al crear la cuenta"}) //500 es el error interno del servidor, significa que hubo un error en el servidor
    }
}


export const login = async(req : Request, res: Response) => {

    //Manejo de errores
    let errors = validationResult(req) //Validamos que no haya errores en el body
    if (!errors.isEmpty()) {
        res.status(400).json({msg: errors.array()}) //400 es el error de bad request, significa que hay un error en la petición
        return
    }


    //Buscar si el usuario existe
    const { email, password} = req.body 

    const user = await User.findOne({email})

    if (!user) {
        const error = new Error("El usuario no esta registrado")
        res.status(404).json({msg: error.message}) //409 es el error de conflicto, significa que ya existe un usuario con ese correo
        return
    }

    //Comprobar el password
    const isPasswordCorrect = await checkPassword(password, user.password)
    if (!isPasswordCorrect) {
        const error = new Error("Passowrd incorrecto")
        res.status(401).json({error : error.message})
        return
    }
    res.send('Autenticado')
}