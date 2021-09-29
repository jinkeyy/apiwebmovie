const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

filterMovieController = async (reqs, res) => {
    try {
        let nationalMovie = reqs.query.national == undefined ? "" : reqs.query.national;
        let typeMovie = reqs.query.typemovie == undefined ? "" : reqs.query.typemovie;
        let yearMovie = reqs.query.year == undefined ? "" : reqs.query.year;
        const pageIndex = parseInt(reqs.query.pageIndex);
        const pageSize = parseInt(reqs.query.pageSize);
        const skipIndex = (pageIndex - 1 ) * pageSize ;
        let movies = [];
        let totalMovie = "";
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
            totalMovie = await Movie.find({
                national: nationalMovie,
                typemovie: typeMovie,
                year: yearMovie,
            });
            movies = await Movie.find({
                national: nationalMovie,
                typemovie: typeMovie,
                year: yearMovie,
            }).limit(pageSize).skip(skipIndex).exec();
        } else {
            totalMovie = await Movie.find({
                national: nationalMovie,
                typemovie: typeMovie,
                year: yearMovie,
            });
            movies = await Movie.find({
                national: nationalMovie,
                typemovie: { $in: [typeMovie] },
                year: yearMovie,
            }).limit(pageSize).skip(skipIndex).exec();
        }
        if (movies == null) {
            res.status(204).send();
        } else {
            res.json({
                "totalMovie": totalMovie.length,
                "movies": movies,
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports = filterMovieController