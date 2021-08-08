const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const registerController = require("../controllers/controller.register")

app.post("/register", (reqs, res) => {
    registerController(reqs, res)
})
module.exports = app;