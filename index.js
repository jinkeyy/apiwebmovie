const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const config = require('./src/config.json');

const url = require('url');
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

mongoose.connect(config.MongoDb.connectionString, { useNewUrlParser: true })


//fix cros
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



const port = config.App.localhost
app.listen(process.env.PORT || port,()=>{
    console.log("Cổng "+port)
})
const login = require("./src/routes/user/route.login")
const register = require("./src/routes/user/route.register")
const createmovie = require("./src/routes/movie/route.createMovie")
const getallmovie = require("./src/routes/movie/route.getAllMovie")
const getmovie = require("./src/routes/movie/route.getMovie") 


//// Thềm route vào dưới đây hic
app.use(login)
app.use(register)
app.use(createmovie)
app.use(getallmovie)
app.use(getmovie)

const host = "http://localhost:"+port

const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title:"Movie Api",
            version:"1.0.0",
            description:"Api we movie :)"
        },
    },
    apis:["./src/routes/user/route*.js", "./src/routes/movie/route*.js"]
    
}
const specs = swaggerJsDoc(options)
app.use("/",swaggerUI.serve,swaggerUI.setup(specs))