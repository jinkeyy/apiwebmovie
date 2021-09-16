const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

updateMovieController = async (reqs,res)=>{
    const type = reqs.body.typemovie.split(",")
    const actors = reqs.body.actors.split(",")
    if(reqs.files == null) {
        reqs.files = {}
    }
    if(reqs.files.background){
        console.log("có ảnh background");
    }
    if(reqs.body.moviename && reqs.body.movielink){
        const newMovie = {};
        newMovie.moviename = reqs.body.moviename
        newMovie.movielink = reqs.body.movielink
        newMovie.trailerlink = reqs.body.trailerlink
        newMovie.description = reqs.body.description
        newMovie.actors = actors
        newMovie.national = reqs.body.national
        newMovie.typemovie = type
        if(reqs.files.image){
            const image = await uploadFile(reqs.files.image)
            newMovie.imagelink = image
        }
        try{
           
            if(await Movie.findOne({'_id': reqs.params.movieId}) == null){
                res.status(400).send("Phim không tồn tại")
            } else{
                // const movie = await Movie.findByIdAndUpdate(reqs.params.movieId, newMovie)
                res.status(201).send({"message":"Sửa phim thành công thành công"});
            } 
            
        }catch(err){
            res.status(400).send(err);
        }
    }else{
        return res.status(400).json({"error":"tên phim hoặc link không được để trống"})
    }
}
module.exports = updateMovieController