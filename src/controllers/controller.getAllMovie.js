const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

getAllMovieController = async (reqs,res)=>{
        try{
            const movieList =  await Movie.find();
            if(movieList.length == 0){
                res.status(204).send("không có bản ghi nào")
            } else{
                res.json(movieList);
            }
        }catch(err){
            res.status(500).send(err);
        }
}
module.exports = getAllMovieController