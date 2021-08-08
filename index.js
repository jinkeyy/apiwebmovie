const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const config = require('./src/config.json');
mongoose.connect(config.MongoDb.connectionString, { useNewUrlParser: true })



const port = config.App.localhost
app.listen(port,()=>{
    console.log("Cổng "+port)
})

const login = require("./src/routes/route.login")
const register = require("./src/routes/route.register")
//// Thềm route vào dưới đây hic
app.use(login)
app.use(register)

