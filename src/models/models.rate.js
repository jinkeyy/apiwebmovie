const mongoose = require("mongoose")
const rateSchema = mongoose.Schema({
    rate: { required: true, type: Number, min: [0, "Điểm số quá thấp"], max: [10] },
    user: { type: 'ObjectId', required: true, index: true },
    movie: { type: 'ObjectId', required: true, index: true },
})
rateSchema.index({ movie: 1, user: 1 }, { unique: true });
module.exports = mongoose.model('rate', rateSchema)