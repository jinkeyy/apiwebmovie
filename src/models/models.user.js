const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: { required: true, type: String },
    email: { type: String, unique: true, },
    password: { required: true, type: String, select: false },
    phone: { type: String, },
    dob: { type: String },
    role: {
        type: String,
        enum: ['guest', 'admin'],
        default: 'guest',
    }
})

module.exports = mongoose.model('user', userSchema)