import { Router } from 'express';
import userRoute from "./user.route.js";

const routes = Router();

routes.use('/user', userRoute)

export default routes;
