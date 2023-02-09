import { Router } from "express";
import { check } from "express-validator";
import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/users.controller';
import { emailExist, userExistsId } from "../helpers/db-validator";
import validateFields from '../middlewares/validate-fields';

const router = Router();


router.get( '/', getUsers )

router.get( '/:id',[
    check('id').isNumeric(),
    check('id').custom( userExistsId ),
    validateFields,
], getUser )

router.post( '/',[
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    // check('password', 'El password es obligatorio y debe ser tener mas de 6 digitos ').isLength({min:6 }),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom( emailExist ),
    validateFields
],postUser )

router.put( '/:id',[
    check('id').isNumeric(),
    check('id').custom( userExistsId ) ,
    validateFields
], putUser )

router.delete( '/:id',[
    check('id').isNumeric(),
    check('id').custom( userExistsId ) ,
    validateFields
], deleteUser )


export default router;