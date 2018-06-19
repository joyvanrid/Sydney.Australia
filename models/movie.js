var mongoose = require('mongoose');

//movie schema
var movieSchema = mongoose.Schema({
    mediaTitle: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);

// get movies
module.exports.getMovies = function (callback, limit) {
    Movie.find(callback).limit(limit);
}

//get movies by ID
module.exports.getMovieByID = function (id, callback) {
    Movie.findById(id, callback);
}

//add movies
module.exports.addMovie = function(movie, callback) {
    Movie.create(movie, callback);
}
