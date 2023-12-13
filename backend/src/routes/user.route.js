import { Router } from 'express';
import userController from '../controllers/user.controller.js'

const userRoute = Router();

userRoute.post('/create', userController.createUser)

export default userRoute;