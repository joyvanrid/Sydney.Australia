var express = require('express')
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended: true}))

//Connect to mongoose
mongoose.connect('mongodb://localhost:27017/gaytabase')
var db = mongoose.connection;

Movie = require('./models/movie')

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: 'C:/bookstore/'});
});

app.get('/api/movies', function(req, res) {
    Movie.getMovies(function(err, movies) {
       if (err) {
           throw err;
       }
       res.json(movies);
    });
});

app.post('/api/movies', function(req, res) {
    var movie = req.body;
    Movie.addMovie(movie, function(err, movie) {
        if (err) {
            throw err;
        }
        res.json(movie);
    });
});

app.get('/api/movies/:_id', function(req, res) {
    Movie.getMovieByID(req.params._id, function(err, movie) {
       if (err) {
           throw err;
       }
       res.json(movie);
    });
});

app.listen(3000);
console.log('Running on port 3000...');
