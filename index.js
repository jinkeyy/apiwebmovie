const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const mongoose = require('mongoose');
const config = require('./src/config.json');
// const fsRoutes = require("fs-routes")
const fileUpload = require('express-fileupload')
const url = require('url');
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

app.use(express.static("public"));
mongoose.connect(config.MongoDb.connectionString, { useNewUrlParser: true })



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

const port = config.App.localhost
app.listen(process.env.PORT || port, () => {
    console.log("Cổng " + port)
})
const login = require("./src/routes/user/route.login")
const register = require("./src/routes/user/route.register")
const createmovie = require("./src/routes/movie/route.createMovie")
const getallmovie = require("./src/routes/movie/route.getAllMovie")
const getmovie = require("./src/routes/movie/route.getMovie")
const updatemovie = require("./src/routes/movie/route.updateMovie")
const deletemovie = require("./src/routes/movie/route.deleteMovie")
const getAllUser = require("./src/routes/user/route.user")
const gettypemovie = require("./src/routes/movie/route.getTypeMovie")
const filtermovie = require("./src/routes/movie/route.filterMovie")
const getnationalmovie = require("./src/routes/movie/route.getNationalMovie");
const findMovie = require("./src/routes/movie/route.findMovie")
const comment = require("./src/routes/comment/route.comment")
const rate = require("./src/routes/rate/route.rate")
//// Thềm route vào dưới đây hic
app.use(login, register, getallmovie, createmovie, getmovie, updatemovie, deletemovie, gettypemovie, filtermovie, getnationalmovie, findMovie)
getAllUser(app)
comment(app)
rate(app)
app.use(fileUpload())


const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Movie Api",
            version: "1.0.0",
            description: "*<strong>Lưu ý:</strong><br>- Nếu vào link deloy xin chọn servers https để có thể test api xin cảm ơn <br>- Còn ở localhost chọn http <br>- Đăng nhập để lấy token -> copy token vào ổ khóa -> chú ý quyền mỗi api để đăng nhâp tài khoản hợp lý <br> - Những api có có khóa là đã được tích hợp JWT<br>- Muốn call api có tích hợp JWT hãy gửi kèm theo header với giá trị token : <token bạn lấy được khi đăng nhập>",
            contact: {
                "name": "Trello",
                "url": "https://github.com/jinkeyy/apiwebmovie",
            },

        },
        servers: [
            {
                url: 'http://'
            },
            {
                url: 'https://'
            }
        ]
    },
    apis: ["./src/routes/editor.*.js", "./src/routes/user/route*.js", "./src/routes/movie/route*.js", "./src/routes/comment/route*.js", "./src/routes/rate/route*.js"]
}
const specs = swaggerJsDoc(options)
app.use("/", swaggerUI.serve, swaggerUI.setup(specs))
