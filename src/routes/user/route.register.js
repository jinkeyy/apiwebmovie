const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const registerController = require("../../controllers/controller.register.js")
/**
 * @swagger
 * /register:
 *      post:
 *          summary: trả về thông tin tài khoản nếu đăng kí thành công
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              -email
 *                              -password
 *                              -phone
 *                              -username
 *                              -ruler
 *                          properties:
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              username:
 *                                  type: string
 *                              phone:
 *                                  type: string
 *                              ruler:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: Thông báo đăng kí thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            item:
 *                              $ref:"#/components/schemas/User"
 */
app.post("/register", (reqs, res) => {
    registerController(reqs, res)
})
module.exports = app;