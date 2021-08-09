const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
    moviename: { required: true, type: String },
    trailerlink: {type: String},
    movielink: {require: true, type: String},
    imagelink: {require: true, type: String},
    description: {type: String},
    actors : {type: Array},
    national : {type: String},
    typemovie: {type: Array},

    
})

module.exports = mongoose.model('movie',movieSchema)