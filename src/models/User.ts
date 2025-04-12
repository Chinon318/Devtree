import mongoose, { Schema } from "mongoose";


interface IUser{
    name : string,
    email : string,
    password : string
}


/* Definimos el Schema
    * El Schema es la estructura de la base de datos, donde definimos los tipos de datos y las validaciones
    * En este caso, el Schema es para la colección de usuarios
    * El Schema se define con el método Schema de mongoose
    * El primer parámetro es un objeto con los campos y sus tipos de datos
    * El segundo parámetro son las opciones del Schema
*/
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, //Elimina los espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        trim: true, //Elimina los espacios en blanco al inicio y al final
        unique: true, //No se pueden repetir los correos
    },
    password: {
        type: String,
        required: true,
        trim: true, //Elimina los espacios en blanco al inicio y al final
    }
})


const User = mongoose.model<IUser>('User', userSchema) //Creamos el modelo de la base de datos, el primer parámetro es el nombre de la colección y el segundo es el Schema
export default User