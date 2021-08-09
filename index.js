const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const config = require('./src/config.json');

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

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
const host = "http://localhost:"+port
const options = {
    definition:{
        openapi: "3.0.0",
        info:{
            title:"Movie Api",
            version:"1.0.0",
            description:"Api we movie :)"
        },
        servers:[
            {
                url: host
            }
        ],
    },
    apis:["./src/routes/route*.js"]
}
const specs = swaggerJsDoc(options)
app.use("/doc-api",swaggerUI.serve,swaggerUI.setup(specs))