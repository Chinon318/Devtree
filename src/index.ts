import colors from 'colors'; //Importamos la librería colors para dar color a los mensajes en consola
import server from './server'; //Importamos el servidor desde el archivo server.ts

const port = process.env.PORT || 4000; //Definimos el puerto

server.listen(port,() => {
    console.log(colors.green('Servidor corriendo en el puerto: '),port); //Mensaje de confirmación al iniciar el servidor
})
