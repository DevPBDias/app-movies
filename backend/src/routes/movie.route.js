import { Router } from 'express';
import movieController from '../controllers/movie.controller.js'
import { validationId } from '../middlewares/valid.middlewares.js'

const movieRoute = Router();

movieRoute.post('/', movieController.createMovie)
movieRoute.get('/', movieController.getAllmovies)
movieRoute.get('/:id', validationId, movieController.getmovieById)
movieRoute.patch('/:id', validationId, movieController.updatemovie)

export default movieRoute;