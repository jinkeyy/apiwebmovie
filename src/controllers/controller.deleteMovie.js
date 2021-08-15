const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

deleteMovieController = async (reqs,res)=>{
        try{
            if(await Movie.findOne({'_id': reqs.params.movieId}) == null){
                res.status(400).send("Phim không tồn tại")
            } else{
                const movie =  await Movie.deleteOne({'_id': reqs.params.movieId});
                res.status(201).send("Đẫ xóa thành công")
            } 
        }catch(err){
            res.status(500).send(err);
        }
}
module.exports = deleteMovieController