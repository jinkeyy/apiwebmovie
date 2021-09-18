const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

filterMovieController = async (reqs, res) => {
    console.log(123);
    try {
        let nationalMovie = reqs.query.national == undefined ? "" : reqs.query.national;
        let typeMovie = reqs.query.typemovie == undefined ? "" : reqs.query.typemovie;
        let yearMovie = reqs.query.year == undefined ? "" : reqs.query.year;
        let movies = [];
        if (nationalMovie === "") {
            nationalMovie = { $exists: true }
        }
        if (yearMovie === "") {
            yearMovie = { $exists: true }
        }
        if (typeMovie === "") {
            typeMovie = { $exists: true }
        }
        if (typeMovie.$exists) {
            movies = await Movie.find({
                national: nationalMovie,
                typemovie: typeMovie,
                // year: yearMovie;
            });
        } else {
            movies = await Movie.find({
                national: nationalMovie,
                typemovie: { $in: [typeMovie] },
                // year: yearMovie;
            });
        }
        if (movies == null) {
            res.status(204).send();
        } else {
            res.json(movies);
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports = filterMovieController