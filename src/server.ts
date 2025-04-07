import express, { Router } from 'express'; //Importamos express
import router from './router';

//Toda la configuracion del servidor se hace en este archivo

const app = express(); //Instanciamos express

//Leer datos de forms 
app.use(express.json()); //Middleware para leer datos en formato JSON


app.use('/',router); //Cada que haya una peticion a la ruta pricipal entrara a cada ruta




export default app; //Exportamos la instancia de express para usarla en otros archivos