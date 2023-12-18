import { Router } from 'express';
import movieController from '../controllers/movie.controller.js'
import { validationId, validationMovie } from '../middlewares/valid.middlewares.js'

const movieRoute = Router();

movieRoute.post('/', movieController.createMovie)
movieRoute.get('/', movieController.getAllMovies)
movieRoute.get('/:id', validationId, validationMovie, movieController.getMovieById)
movieRoute.patch('/:id', validationId, validationMovie, movieController.updateMovie)

export default movieRoute;