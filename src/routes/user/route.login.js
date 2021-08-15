const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const loginController = require("../../controllers/controller.login.js")

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  -email
 *                  -username
 *                  -password
 *              properties:
 *                  id:
 *                      type: string
 *                      description: mã 
 *                  username:
 *                      type: string
 *                      description: tên của tài khoản 
 *                  email:
 *                      type: string
 *                      description: em mai người dùng
 *                  phone:
 *                      type: string
 *                      description: số điện thoại 
 *                  rule:
 *                      type: string
 *                      description: quyền 
 *              example:
 *                  id: 61113c3c6459261dfcfa2d13
 *                  username: luna
 *                  email: admin@gmail.com
 */
/**
 * @swagger
 * /login:
 *      post:
 *          summary: trả về thông tin tài khoản nếu đăng nhập thành công
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
 *                          properties:
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: Đăng nhập
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            item:
 *                              $ref:"#/components/schemas/User"
 */
app.post("/login", (reqs, res) => {
    loginController(reqs,res)
})
module.exports = app;