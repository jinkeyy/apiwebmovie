const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

updateMovieController = async (reqs,res)=>{
    if(reqs.body.moviename && reqs.body.movielink && reqs.body.imagelink){
        const newMovie = {};
        newMovie.moviename = reqs.body.moviename
        newMovie.movielink = reqs.body.movielink
        newMovie.imagelink = reqs.body.imagelink
        newMovie.trailerlink = reqs.body.trailerlink
        newMovie.description = reqs.body.description
        newMovie.actors = reqs.body.actors
        newMovie.national = reqs.body.national
        newMovie.typemovie = reqs.body.typemovie
        try{
           
            if(await Movie.findOne({'_id': reqs.params.movieId}) == null){
                res.status(400).send("Phim không tồn tại")
                
            } else{
                
                
                const movie = await Movie.findByIdAndUpdate(reqs.params.movieId, newMovie)
                res.status(201).send({"message":"Sửa phim thành công thành công"});
            } 
            
        }catch(err){
            res.status(500).send(err);
        }
    }else{
        res.status(400).send("Input đầu vào không được để trống" );
    }

}
module.exports = updateMovieController