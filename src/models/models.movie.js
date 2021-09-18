const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
    moviename: { required: true, type: String },
    trailerlink: { type: String },
    movielink: { require: true, type: String },
    imagelink: { require: true, type: String },
    imagebackgroundlink: {require: true, type: String},
    description: { type: String },
    timeduration: {type: String},
    year :{type: String},
    createdate: {type: String},
    actors: { type: Array },
    national: { 
        type: String,
        enum: ['Châu Á','Mỹ','Châu Âu','Trung Quốc','Nhật Bản','Việt Nam','Khác'],
        default:"Khác"
     },
    typemovie: {
        type: [String],
        enum: ['Hài','Lãng Mạn','Hành Động','Kinh Dị','Gia Đình','Hoạt Hình','Khác'],
        default:["Khác"]
    },


})

module.exports = mongoose.model('movie', movieSchema)