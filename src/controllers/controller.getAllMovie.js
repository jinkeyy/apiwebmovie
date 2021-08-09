const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

getAllMovieController = async (reqs,res)=>{
        try{
            const movieList =  await Movie.find();
            res.send(movieList);
        }catch(err){
            res.status(400).send(err);
        }
}
module.exports = getAllMovieController