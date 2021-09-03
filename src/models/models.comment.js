const mongoose = require("mongoose")
const commentSchema = mongoose.Schema({
    comment: { required: true, type: String },
    user: { type: 'ObjectId', required: true },
    movie: { type: 'ObjectId', required: true },
    createAt: { type: String }
})

module.exports = mongoose.model('comment', commentSchema)