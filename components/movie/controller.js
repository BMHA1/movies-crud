const Movie = require('./model');

module.exports.getMovie = async (req, res) => {
    const data = await Movie.find({_id: req.param.id});
}

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
}

//module.exports.get("/movie/:id", (req, res) => res.json({movie : movie[req.params.id]}))

// movieController.get("/movies", (req, res) => res.json({movie : movie}))

// movieController.get("/movie/:id", (req, res) => res.json({movie : movie[req.params.id]}))

// movieController.get("/movies/search", (req, res) => {
//     let searchedMovie
//     for(let i = 0; i < movie.length; i++){
//         if (movie[i].includes(req.query.query)){
//             searchedMovie = movie[i]
//         }
//     }
//     res.json ({movie: searchedMovie})
// })

// movieController.post("/movies/", (req, res) => {
//     let addMovie = movie.push(req.body.movie)
//     res.json({movie : movie})
// })

// movieController.put("/movies/:id", (req, res) => {
//     movie[req.params.id] = req.body.movie;
//     res.json({movie : movie})
//     })

// movieController.delete("/movies/:id", (req, res) => {
//     movie.splice(req.params.id, 1)
//     res.json({movie : movie})
// })