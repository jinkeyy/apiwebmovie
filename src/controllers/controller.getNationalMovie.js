const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

getNationalMovie = async (reqs,res)=>{
    const nationalmovie = await Movie.schema.path('national').enumValues
    res.json(nationalmovie)
}
module.exports = getNationalMovie