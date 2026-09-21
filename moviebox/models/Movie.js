const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    releaseYear: Number,
    duration: Number,
    language: String,
    director: String,
    cast: String,
    rating: Number,
    poster: String
});

movieSchema.index({ title: 'text' });

module.exports = mongoose.model('Movie', movieSchema);