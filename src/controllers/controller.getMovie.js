const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

getMovieController = async (reqs,res)=>{
        try{
            const movie =  await Movie.findOne({'_id': reqs.params.movieId});
            if(movie == null){
                res.status(204).send();
            } else{
                res.json(movie);
            }
        }catch(err){
            res.status(500).send(err);
        }
}
module.exports = getMovieController