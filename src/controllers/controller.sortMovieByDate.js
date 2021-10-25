const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

sortMovieByDateController = async (reqs,res)=>{
        try{

            const movieList =  await Movie.find().sort({'createdate': -1}).limit(8).skip(0).exec();;
            if(movieList.length == 0){
                res.status(204).send("không có bản ghi nào")
            } else{
                res.json(movieList);
            }
        }catch(err){
            res.status(500).send(err);
        }
}
module.exports = sortMovieByDateController