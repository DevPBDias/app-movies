import { Router } from 'express';
import userController from '../controllers/user.controller.js'
import { validationId, validationUser } from '../middlewares/valid.middlewares.js'
import { authMiddleware } from '../middlewares/login.middlewares.js';

const userRoute = Router();

userRoute.post('/', userController.createUser)
userRoute.get('/', userController.getAllUsers)
userRoute.get('/:id', validationId, validationUser,  userController.getUserById)
userRoute.patch('/:id', authMiddleware, validationId, validationUser,  userController.updateUser)

export default userRoute;