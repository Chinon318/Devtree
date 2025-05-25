import { Router } from "express"; //Permite configurar un objeto con todas las rutas
import {body} from "express-validator";
import { createAccount, getUser, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";

const router = Router(); //Instancia de Router


/* Autenticacion y registro */
router.post('/auth/register', 
    body('handle').notEmpty().withMessage('El nombre de usuario es obligatorio'), //Validamos que el handle no esté vacío

    body('name').notEmpty().withMessage('El nombre es obligatorio'),

    body('email').isEmail().withMessage('Email no valido'),

    body('password').isLength({min: 8}).withMessage('El password es muy corto, minimo 8 caracteres'),

    handleInputErrors,

    createAccount)

router.post('/auth/login',

    body('email').isEmail().withMessage('Email no valido'),

    body('password').notEmpty().withMessage('El password es obligatorio'),

    handleInputErrors,

    login
)

router.get('/user', authenticate, getUser)


export default router; //Exportamos el objeto router para usarlo en otros archivos