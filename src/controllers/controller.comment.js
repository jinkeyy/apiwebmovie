const Comment = require("../models/models.comment")


exports.getbyMovie = async (reqs, res) => {
    try {
        const comments = await Comment.find({ "movie": reqs.params.movieId });
        res.json(comments);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.getByUser = async (reqs, res) => {
    try {
        const comments = await Comment.find({ "user": reqs.params.userId });
        res.json(comments);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.create = async (reqs, res) => {
    const { body } = reqs
    if (body.comment == "") return res.status(400).json({ "error": "chưa điền comment" })
    if (!body.user) return res.status(400).json({ "error": "không có user id" })
    if (!body.movie) return res.status(400).json({ "error": "không có movie id" })
    const commment = new Comment(body)
    commment.createAt = new Date().getTime()
    try {
        await commment.save()
        res.status(200).send({ "message": "Thêm bình luận thành công" });
    } catch (err) {
        res.status(500).send(err);
    }

}
exports.delete = async (reqs, res) => {
    try {
        const comment = await Comment.findById(reqs.params.commentId)
        if (!comment) return res.status(400).json({ "notification": 'không tồn tại id ' + params.commentId })
    } catch (err) {
        res.status(400).json({ "notification": "error" });
    }
    try {
        await Comment.findOneAndRemove({ "_id": reqs.params.commentId });
        res.json({ "notification": "done" });
    } catch (err) {
        res.status(400).json({ "notification": "error" });
    }
}
exports.update = async (reqs, res) => {
    let { body, params } = reqs
    if (body.user) return res.status(400).json({ "error": "không thể sửa id user" })
    if (body.moive) return res.status(400).json({ "error": "không thể sửa id movie" })
    try {
        await Comment.findById(params.commentId).exec((error, comment) => {
            if (!comment) return res.status(400).json({ "notification": 'không tồn tại id ' + params.commentId })
        })
    } catch (error) {
        return res.status(400).json({ "notification": 'error' })
    }
    if (body.comment == "") return res.status(400).json({ "error": "chưa điền comment" })
    try {
        await Comment.findByIdAndUpdate(params.commentId, body)
        res.json({ "notification": "done" })
    } catch (error) {
        res.status(500).send(error)
    }
}