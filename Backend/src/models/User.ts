import mongoose, { Schema, Document } from "mongoose";


export interface IUser extends Document{
    handle: string,
    name : string,
    email : string,
    password : string,
    description?: string
}


/* Definimos el Schema
    * El Schema es la estructura de la base de datos, donde definimos los tipos de datos y las validaciones
    * En este caso, el Schema es para la colección de usuarios
    * El Schema se define con el método Schema de mongoose
    * El primer parámetro es un objeto con los campos y sus tipos de datos
    * El segundo parámetro son las opciones del Schema
*/
const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true, //Elimina los espacios en blanco al inicio y al final
        unique: true, //No se pueden repetir los usuarios
        lowercase: true, //Convierte el texto a minúsculas
    },
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
        lowercase: true, //Convierte el texto a minúsculas
    },
    password: {
        type: String,
        required: true,
        trim: true, //Elimina los espacios en blanco al inicio y al final
    },
    description:{
        type: String,
        default: '', //Si no se proporciona, se establece como cadena vacía
    }
})


const User = mongoose.model<IUser>('User', userSchema) //Creamos el modelo de la base de datos, el primer parámetro es el nombre de la colección y el segundo es el Schema
export default User