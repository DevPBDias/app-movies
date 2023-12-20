import movieService from '../services/movie.service.js'

const createMovie = async (req, res) => {
    try {
        const { name, launchDate, director, actors, image,
            whereToWatch, category, type } = req.body;

        if (!launchDate || !name || !actors || !director || !image || !whereToWatch || !category || !type) {
            return res.status(400)
                .send({ message: 'Submit all fields' })
        }

        const movie = await movieService.createMovie(req.body);

        if (!movie) {
            return res.status(400)
                .send({ message: 'Not created' })
        }

        return res.status(201).send({
            message: 'Created',
            movieCreated: {
                id: movie.id,
                name,
                launchDate,
                actors,
                director,
                image,
                whereToWatch,
                category,
                type
            }
        });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();

        if (movies.length === 0) {
            return res.status(400)
                .send({ message: 'Not found' })
        }

        return res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getMovieById = async (req, res) => {
    try {
        const movieFound = req.movie;

        return res.send(movieFound);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const updateMovie = async (req, res) => {
    try {
        const { id } = req;
        const { name, launchDate, director, actors, image,
            whereToWatch, category, type } = req.body;

        if (!launchDate && !name && !actors && !director && !image && !whereToWatch && !category && !type) {
            return res.status(400)
                .send({ message: 'Submit at least one field' })
        }

        await movieService.updateMovie(
            id,
            name,
            launchDate,
            actors,
            director,
            image,
            whereToWatch,
            category,
            type
        )

        res.status(201).send({ message: 'Updated' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const lastMovies = async (req, res) => {
    try {
        const movies = await movieService.lastMovies();

        if (!movies) {
            return res.status(400).send({ message: 'Not found' })
        }

        res.status(200).send({
            movies: {
                id: movies._id,
                name: movies.name,
                launchDate: movies.launchDate,
                actors: movies.actors,
                director: movies.director,
                image: movies.image,
                whereToWatch: movies.whereToWatch,
                category: movies.category,
                type: movies.type,
            },
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export default {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    lastMovies
}