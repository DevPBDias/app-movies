import { Router } from 'express';
import userController from '../controllers/user.controller.js'
import { validationId, validationUser } from '../middlewares/valid.middlewares.js'

const userRoute = Router();

userRoute.post('/', userController.createUser)
userRoute.get('/', userController.getAllUsers)
userRoute.get('/:id', validationId, validationUser,  userController.getUserById)

export default userRoute;