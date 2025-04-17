import bcrypt from 'bcrypt';

export const hashPassword = async (password:string) => {
    const salt = await bcrypt.genSalt(10); //Generamos un salt de 10 caracteres
    return await bcrypt.hash(password, salt); //Hasheamos la contraseña con el salt generado
}

export const checkPassword = async(enteredPassword : string, hash:string ) =>{

    return await bcrypt.compare(enteredPassword, hash)

}
