import { Request, Response } from "express";


export const getUsers = ( req:Request, res:Response ) => {

    res.json({
        msg : 'getUsers'
    })
}

export const getUser = ( req:Request, res:Response ) => {

    const { id } = req.params

    res.json({
        msg : 'getUser 1',
        id
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