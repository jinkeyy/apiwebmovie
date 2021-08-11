const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

getMovieController = async (reqs,res)=>{
        try{
            const movie =  await Movie.find({id: reqs.body.id});
            res.send(movie);
        }catch(err){
            res.status(400).send(err);
        }
}
module.exports = getMovieController