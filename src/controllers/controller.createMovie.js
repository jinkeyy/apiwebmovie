const Movie = require("../models/models.movie.js")
const express = require("express")
const app = express()

createMovieController = async (reqs,res)=>{
    if(reqs.body.moviename && reqs.body.movielink && reqs.body.imagelink){
        const newMovie = new Movie();
        newMovie.moviename = reqs.body.moviename
        newMovie.movielink = reqs.body.movielink
        newMovie.imagelink = reqs.body.imagelink
        newMovie.trailerlink = reqs.body.trailerlink
        newMovie.description = reqs.body.description
        newMovie.actors = reqs.body.actors
        newMovie.national = reqs.body.national
        newMovie.typemovie = reqs.body.movie
        try{
            const Movie = await newMovie.save()
            res.send({
                "notification":"Thêm phim mới thành công"
            });
        }catch(err){
            res.status(400).send(err);
        }
    }else{
        res.status(400).send("lỗi "+reqs.body.email );
    }

}
module.exports = createMovieController