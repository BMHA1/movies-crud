const Movie = require('./model');

// Método para crear una película en la BBDD.

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
}

// Método para buscar todas las películas.

module.exports.getMovieCollection = (req, res) => res.json(Movie);

// Método para buscar una película por título.

module.exports.getMovieByTitle = (req, res) => {
    const movie = new Movie(req.param.title);
    res.json(movie);
    }

// Método para buscar película por ID.

module.exports.getMovieById = async (req, res) => {
    const movie = await Movie.find({_id: req.param.ObjectID})
    res.json(movie)
}

// Método para borrar películas.

// module.exports.deleteMovie = async (req, res) => {
    //     await movie.splice(req.params.id, 1)
    //     res.json({movie : movie})
// }


// movieController.
// })