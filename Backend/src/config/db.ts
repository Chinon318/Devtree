import mongoose from "mongoose";
import User, {IUser} from "../models/User";

export const connectDB = async () => {
        try
        {
            const connection = await mongoose.connect(process.env.MONGO_URI)
            
            console.log("Se conecto la base de datos en", connection.connection.host, connection.connection.port) //Mensaje de confirmación al conectar a la base de datos
        }
        catch (error) {
            console.log(error.message)
            process.exit(1) //Si hay un error se cierra el servidor
        }
}