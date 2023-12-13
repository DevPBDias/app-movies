import { Router } from 'express';
import userController from '../controllers/user.controller.js'

const userRoute = Router();

userRoute.post('/', userController.createUser)
userRoute.get('/', userController.getAllUsers)
userRoute.get('/:id', userController.getUserById)

export default userRoute;