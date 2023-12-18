import movieService from '../services/movie.service.js'

const createMovie = async (req, res) => {
    try {
        const { name, launchDate, director, actors, image,
            whereToWatch, category, type } = req.body;

        if (!launchDate || !name || !actors || !director || !image || !whereToWatch || !category || !type) {
            return res.status(400)
                .send({ message: 'Ih, preencha todos os campos para prosseguir' })
        }

        const movie = await movieService.createMovie(req.body);

        if (!movie) {
            return res.status(400)
                .send({ message: 'Acho que o filme não foi adicionado !?' })
        }

        return res.status(201).send({
            message: 'Filme adicionado com sucesso!!',
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

export default {
    createMovie,
}