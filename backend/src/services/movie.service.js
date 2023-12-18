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

const lastMovies = () =>
    Movie.findOne().sort({ _id: -1 });

export default {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    lastMovies,
}