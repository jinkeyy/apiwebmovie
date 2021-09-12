const mongoose = require("mongoose")
const rateSchema = mongoose.Schema({
    rate: { required: true, type: Number, min: [0, "Điểm số quá thấp"], max: [10] },
    user: { type: 'ObjectId', required: true, unique: true, },
    movie: { type: 'ObjectId', required: true },
})

module.exports = mongoose.model('rate', rateSchema)