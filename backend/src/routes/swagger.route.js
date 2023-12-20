import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json'

const swaggerRoute = Router();

swaggerRoute.use("/", swaggerUi.serve);
swaggerRoute.get("/", swaggerUi.setup(swaggerDocument));

export default swaggerRoute;