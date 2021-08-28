const Movie = require("../models/models.movie.js")

findMovieController = async (reqs, res) => {
    if (!reqs.query.key) return res.status(204).send([null]);
    try {
        const movies = await Movie.find({ moviename: { $regex: reqs.query.key, $options: "i" } })
        if (movies == null) {
            res.status(204).send();
        } else {
            res.json(movies);
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports = findMovieController