import type { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

declare global{
    namespace Express{
        interface Request {
            user?: IUser
        }
    }
}

export const authenticate = async(req : Request, res : Response, next : NextFunction) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        const error = new Error("No autorizado")
        res.status(401).json({error: error.message})
        return 
    }

    const [, token] = bearer.split(' ')

    if (!token) {
        const error = new Error("No autorizado")
        res.status(401).json({error: error.message})
        return 
    }

    try {
        const result = jwt.verify(token, process.env.JWT_SECRET)
        if (typeof result === 'object' && result.id) {
            const user = await User.findById(result.id).select('-password')
            console.log(user)
            if (!user) {
                const error = new Error("No existe el usuario")
                res.status(404).json({error: error.message})
                return 
            }
            req.user = user
            next()
        }
        return
    } catch (error) {
        res.status(500).json({error: "Token no valido"})
        return
    }
}
