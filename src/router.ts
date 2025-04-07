import { Router } from "express"; //Permite configurar un objeto con todas las rutas

const router = Router(); //Instancia de Router

/* Autenticacion y registro */
router.post('/auth/register',(req,res) =>{
    console.log(req.body); //Mensaje de confirmación al iniciar el servidor
})


export default router; //Exportamos el objeto router para usarlo en otros archivos