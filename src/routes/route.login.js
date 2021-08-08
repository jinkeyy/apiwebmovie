const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const loginController = require("../controllers/controller.login")

app.post("/login", (reqs, res) => {
    loginController(reqs,res)
})
module.exports = app;