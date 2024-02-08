import Movie from "../models/Movie.js";

const createMovie = (body) => Movie.create(body);
const getAllMovies = () => Movie.find();
const getMovieById = (id) => Movie.findById(id);

const updateMovie = (
    id,
    name,
    year,
    company,
    linkTrailer,
    actors,
    image,
    category,
    type,
    director,
    platform,
) =>
    Movie.findOneAndUpdate({ _id: id },
        {
            name,
            year,
            company,
            linkTrailer,
            actors,
            image,
            category,
            type,
            director,
            platform,
        },
        { rawResult: true }
    );

const lastMovies = () =>
    Movie.find().sort({ launchDate: -1 }).limit(10);

export default {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    lastMovies,
}