const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

filterMovieController = async (reqs,res)=>{
        try{
            console.log(reqs.query.national);
            console.log(reqs.query.typemovie);
            let nationalMovie = reqs.query.national == undefined ? "" : reqs.query.national;
            let typeMovie = reqs.query.typemovie == undefined ? "" : reqs.query.typemovie;
            console.log(nationalMovie);
            console.log(typeMovie);
            const movies =  await Movie.find({
                $or : [
                    {"national": nationalMovie},
                    {"typemovie": [typeMovie]}
                ]
        
            });
            if(movies == null){
                res.status(204).send();
            } else{
                res.json(movies);
            }
        }catch(err){
            res.status(500).send(err);
        }
}
module.exports = filterMovieController