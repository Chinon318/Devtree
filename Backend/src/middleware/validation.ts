import type { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"


export const handleInputErrors = (req : Request, res : Response, next : NextFunction) => {
    let errors = validationResult(req) //Validamos que no haya errores en el body

    if (!errors.isEmpty()) {
        res.status(400).json({msg: errors.array()}) //400 es el error de bad request, significa que hay un error en la petición
        return
    }
    next()
}