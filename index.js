const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const config = require('./src/config.json');
// const fsRoutes = require("fs-routes")
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
// console.log(fsRoutes)
// const output = fsRoutes.default('src/routes/');
// for(let i of output){
//     console.log(i)
//     require(i.path)(app)
// }

const port = config.App.localhost
app.listen(process.env.PORT || port,()=>{
    console.log("Cổng "+port)
})
const login = require("./src/routes/user/route.login")
const register = require("./src/routes/user/route.register")
const createmovie = require("./src/routes/movie/route.createMovie")
const getallmovie = require("./src/routes/movie/route.getAllMovie")
const getmovie = require("./src/routes/movie/route.getMovie") 
const updatemovie = require("./src/routes/movie/route.updateMovie")
const deletemovie = require("./src/routes/movie/route.deleteMovie")
const getAllUser = require("./src/routes/user/route.user")

//// Thềm route vào dưới đây hic
app.use(login,register,getallmovie,createmovie, getmovie, updatemovie, deletemovie)
getAllUser(app)


const host = "http://localhost:"+port

const options = {
    definition:{
        openapi: "3.0.1",
        info:{
            title:"Movie Api",
            version:"1.0.0",
            description:"*<strong>Lưu ý:</strong><br>- Nếu vào link deloy xin chọn server https để có thể test api xin cảm ơn <br>- Còn ở localhost chọn http <br>- Đăng nhập để lấy token -> copy token vào ổ khóa -> chú ý quyền mỗi api để đăng nhâp tài khoản hợp lý <br> - Những api có có khóa là đã được tích hợp JWT<br>- Muốn call api có tích hợp JWT hãy gửi kèm theo header với giá trị token : <token bạn lấy được khi đăng nhập>",
            contact: {
                "name": "Github",
                "url": "https://github.com/jinkeyy/apiwebmovie",
            },

        },
        servers:[
            {
                url:'http://'
            },
            {
                url:'https://'
            }
        ]
    },
    apis:["./src/routes/editor.*.js","./src/routes/user/route*.js", "./src/routes/movie/route*.js"]
}
const specs = swaggerJsDoc(options)
app.use("/",swaggerUI.serve,swaggerUI.setup(specs))

