const Movie = require("../models/models.movie.js")

searchMovieController = async (reqs, res) => {
    if (!reqs.query.key) return res.status(204).send([null]);
    try {
        const pageIndex = parseInt(reqs.query.pageIndex);
        const pageSize = parseInt(reqs.query.pageSize);
        const skipIndex = (pageIndex - 1) * pageSize;
        const totalMovie = await Movie.find({
            $or: [
                { moviename: { $regex: reqs.query.key, $options: "i" } },
                { movienamevn: { $regex: reqs.query.key, $options: "i" } },
            ]
        })
        const movies = await Movie.find({
            $or: [
                { moviename: { $regex: reqs.query.key, $options: "i" } },
                { movienamevn: { $regex: reqs.query.key, $options: "i" } },
            ]
        }).limit(pageSize).skip(skipIndex).exec();
        console.log(movies);
        if (movies == null) {
            res.status(204).send();
        } else {
            res.json({
                "totalMovie": totalMovie.length,
                "totalPage" : Math.floor((totalMovie.length)/pageSize) + 1,
                "movies": movies,
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}
module.exports = searchMovieController