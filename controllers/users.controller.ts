import { Request, Response } from "express";
import User from '../models/usuario';


export const getUsers = async( req:Request, res:Response ) => {

    const query = { where : {
        estado : 1
    }}

    const usuarios = await User.findAll( query )

    res.json({ usuarios })
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

export const postUser = ( req:Request, res:Response ) => {

    const { body } = req

    res.json({
        msg : 'postUser',
        body
    })
}

export const putUser = ( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    res.json({
        msg : 'putUser',
        body,
        id
    })
}

export const deleteUser = ( req:Request, res:Response ) => {

    const { id } = req.params

    res.json({
        msg : 'deleteUser',
        id
    })
}