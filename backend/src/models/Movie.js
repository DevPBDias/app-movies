import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    launchDate: {
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
    whereToWatch: {
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