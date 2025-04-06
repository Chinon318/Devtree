import express from 'express'; //Importamos express

const app = express(); //Instanciamos express

//Routing
app.get('/', (req,res) =>{
    res.send('Hola Mundo'); //Mensaje que se muestra en la ruta raíz
})

app.get('/envio', (req,res) =>{
    res.send('Hola desde la ruta de envio'); //Mensaje que se muestra en la ruta /envio
})

const port = process.env.PORT || 4000; //Definimos el puerto

app.listen(port,() => {
    console.log('Servidor corriendo en el puerto: ',port); //Mensaje de confirmación al iniciar el servidor
})
