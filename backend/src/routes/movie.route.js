import { Router } from 'express';
import movieController from '../controllers/movie.controller.js'
import { validationId, validationMovie } from '../middlewares/valid.middlewares.js'
import { authMiddleware } from '../middlewares/login.middlewares.js';

const movieRoute = Router();

movieRoute.post('/', authMiddleware, movieController.createMovie)
movieRoute.get('/', movieController.getAllMovies)
movieRoute.get('/:id', validationId, validationMovie, movieController.getMovieById)
movieRoute.patch('/:id', authMiddleware, validationId, validationMovie, movieController.updateMovie)

export default movieRoute;