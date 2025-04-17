import express from 'express'; //Importamos express
import 'dotenv/config'; //Importamos dotenv para leer variables de entorno
import router from './router';
import { connectDB } from './config/db';

//Toda la configuracion del servidor se hace en este archivo

const app = express(); //Instanciamos express


connectDB(); //Conectamos a la base de datos

//Leer datos de forms 
app.use(express.json()); //Middleware para leer datos en formato JSON


app.use('/',router); //Cada que haya una peticion a la ruta pricipal entrara a cada ruta




export default app; //Exportamos la instancia de express para usarla en otros archivos