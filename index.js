const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movie_db', { useNewUrlParser: true })

const port = 3500
app.listen(port,()=>{
    console.log("Cổng "+port)
})

const login = require("./src/routes/route.login")
const register = require("./src/routes/route.register")
//// Thềm route vào dưới đây hic
app.use(login)
app.use(register)
