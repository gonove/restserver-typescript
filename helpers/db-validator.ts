import User from '../models/usuario';


export const emailExist = async( email:any = '' ) => {

    const exists = await User.findOne({
        where : {
            email
        }
    })

    if (exists) {
        throw new Error(`El correo: ${email} ya existe.`);
    }
}

export const userExistsId = async(id:number) => {

    const existeUsuario = await User.findByPk( id )
    if ( !existeUsuario ) {
        throw new Error(`El id: ${id} no existe`);

    }
}