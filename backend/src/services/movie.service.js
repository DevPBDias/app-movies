import Movie from "../models/Movie.js";

const createMovie = (body) => Movie.create(body);
const getAllMovies = () => Movie.find();
const getMovieById = (id) => Movie.findById(id);

const updateMovie = (
    id,
    name,
    launchDate,
    actors,
    director,
    image,
    whereToWatch,
    category,
    type
) =>
    Movie.findOneAndUpdate({ _id: id },
        {
            name,
            launchDate,
            actors,
            director,
            image,
            whereToWatch,
            category,
            type
        },
        { rawResult: true }
    );

export default {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
}