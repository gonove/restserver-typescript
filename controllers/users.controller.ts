import { Request, Response } from "express";
import User from '../models/usuario';


export const getUsers = async( req:Request, res:Response ) => {

    const query = { where : {
        estado : 1
    }}
    const { limite = 5, desde = 0 } = req.query;

    // const usuarios = await User.findAll( query )
    const [ total, usuarios ] =  await Promise.all([
        User.count( query ),
        User.findAll({
            offset : Number(desde),
            limit : Number(limite)
        })
    ])

    res.json({
        total,
        usuarios
    })
}

export const getUser = async( req:Request, res:Response ) => {

    const { id } = req.params

    const usuario = await User.findByPk( id )

    if (!usuario) {
        return res.status(404).json({
            msg : `El usuario: ${id} no existe </3`
        })
    }

    res.json({
        usuario
    })
}

export const postUser = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const usuario = User.build( body )
        await usuario.save()

        return res.json({
            usuario
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }
}

export const putUser = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const usuario = await User.findByPk( id )
        await usuario?.update( body )

        res.json({
            usuario
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteUser = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const usuario = await User.findByPk( id )
        await usuario?.update({ estado : false })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }

    res.json({
        msg : 'deleteUser',
        id
    })
}