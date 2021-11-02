const { query } = require('express');
const { model } = require('mongoose');
const Movie = require('./model');

// Método para crear una película en la BBDD.

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
}

// Método para buscar todas las películas.

module.exports.getMovieCollection = async (req, res) => {
    const query = {};
    const movie = await Movie.find(query);
    res.json(movie);
}

// Método para buscar una película por título.

module.exports.getMovieByTitle = async (req, res) => {
    const query = {};
    if(req.query.title)query.title = req.query.title;
    const movie = await Movie.find(query);
    res.json(movie);
    }

// Método para buscar película por ID.

module.exports.getMovieById = async (req, res) => {
    const query = {}
    if(req.query.id)query.id = req.query.id;
    const movie = await Movie.findById(query)
    res.json(movie)
}

// Método para borrar películas.

module.exports.deleteMovie = async (req, res) => {
        const query = {}
        if(req.query.title)query.title = req.query.title;
        await movie.splice(query, 1)
        res.json({movie : Movie})
}


// movieController.
// })