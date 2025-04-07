import server from './server'; //Importamos el servidor desde el archivo server.ts

const port = process.env.PORT || 4000; //Definimos el puerto

server.listen(port,() => {
    console.log('Servidor corriendo en el puerto: ',port); //Mensaje de confirmación al iniciar el servidor
})
