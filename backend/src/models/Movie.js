import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    linkTrailer: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;