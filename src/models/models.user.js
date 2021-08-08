const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: { required: true, type: String },
    email: {type: String,unique: true,},
    password: { required: true, type: String ,select: false},
    phone: {type: String,},
    rule: {type: String,}
})

module.exports = mongoose.model('user',userSchema)