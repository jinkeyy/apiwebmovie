const Rate = require("../models/models.rate")

exports.create = async (reqs, res) => {
    const { body } = reqs
    if (body.rate == "") return res.status(400).json({ "error": "chưa điền rate" })
    if (!body.user) return res.status(400).json({ "error": "không có user id" })
    if (!body.movie) return res.status(400).json({ "error": "không có movie id" })

    const rate = new Rate(body)
    try {
        const rateCheck = await Rate.find({$and:[{user:body.user},{movie:body.movie}]})
        if(rateCheck.length > 0){
            res.status(400).json({ "error": "Tài khoản đã bình luận phim này rồi" })
        }else{
            await rate.save()
            res.status(200).send({ "message": "Thêm dánh giá thành công" });
        }
    } catch (err) {
        err.msg = "Bạn có thể đã bình luận"
        res.status(400).json(err);
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
exports.getratebymovie = async (reqs, res) => {
    try {
        const rate = await Rate.find({ "movie": reqs.params.movieId });
        if (!rate[0]) return res.json(null)
        res.json(rate);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.getRateAvg = async (reqs, res) => {
    try {
        const rate = await Rate.find({ "movie": reqs.params.movieId });
        let numOr0 = n => isNaN(n) ? 0 : n
        if (rate[0]) {
            let sum = rate.reduce((a,b)=> {
                if(a.rate) return a.rate + b.rate
                if(!a.rate) return a + b.rate
            })
            if (rate.length == 1) {
                sum = rate[0].rate
            }
            res.json({
                avg: sum / rate.length
            });
        } else if (rate.length == 0) {
            return res.json({avg: 0})
        }
    } catch (err) {
        res.status(400).send(err);
    }
}