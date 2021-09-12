const Rate = require("../models/models.rate")

exports.create = async (reqs, res) => {
    const { body } = reqs
    if (body.rate == "") return res.status(400).json({ "error": "chưa điền rate" })
    if (!body.user) return res.status(400).json({ "error": "không có user id" })
    if (!body.movie) return res.status(400).json({ "error": "không có movie id" })
    const rate = new Rate(body)
    try {
        await rate.save()
        res.status(200).send({ "message": "Thêm dánh giá thành công" });
    } catch (err) {
        res.status(500).send(err);
    }

}
exports.delete = async (reqs, res) => {
    try {
        const rate = await Rate.findById(reqs.params.rateId)
        if (!rate) return res.status(400).json({ "notification": 'không tồn tại id ' + params.commentId })
    } catch (err) {
        res.status(400).json({ "notification": "error" });
    }
    try {
        await Rate.findOneAndRemove({ "_id": reqs.params.rateId });
        res.json({ "notification": "done" });
    } catch (err) {
        res.status(400).json({ "notification": "error" });
    }
}
exports.getratebymovie = async (reqs,res)=>{
    try {
        const rate = await Rate.find({ "movie": reqs.params.movieId });
        if(!rate[0]) return res.json(null)
        res.json(rate);
    } catch (err) {
        res.status(400).send(err);
    }
}