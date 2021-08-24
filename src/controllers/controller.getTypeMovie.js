const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

getTypeMovie = async (reqs,res)=>{
    const typemovie = await Movie.schema.path('typemovie').caster.enumValues
    res.json(typemovie)
}
module.exports = getTypeMovie