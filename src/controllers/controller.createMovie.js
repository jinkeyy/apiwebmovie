const Movie = require("../models/models.movie.js")
const uploadFile = require("../modules/uploadfile")

createMovieController = async (reqs,res)=>{
    const type = reqs.body.typemovie.split(",")
    if(!reqs.files) return res.status(400).send({"error":"Không tìm thấy file ảnh"})
    if(!reqs.files.image) return res.status(400).send({"error":"Không tìm thấy file ảnh"})
    const imagelink = await uploadFile(reqs.files.image)
    if(reqs.body.moviename && reqs.body.movielink){
        const newMovie = new Movie();
        newMovie.moviename = reqs.body.moviename
        newMovie.movielink = reqs.body.movielink
        newMovie.imagelink = imagelink
        newMovie.trailerlink = reqs.body.trailerlink
        newMovie.description = reqs.body.description
        newMovie.actors = reqs.body.actors
        newMovie.national = reqs.body.national
        newMovie.typemovie = type
        try{
            const Movie = await newMovie.save()
            res.status(200).send({"message":"Thêm phim mới thành công"});
        }catch(err){
            res.status(400).send(err);
        }
    }else{
        res.status(400).send({"error":"Thiếu đầu vào"});
    }

}
module.exports = createMovieController