const express = require('express');
const token = require("../../middleware/token")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const createMovieController = require("../../controllers/controller.createMovie.js")

/**
 * @swagger
 * components:
 *      schemas:
 *          Movie:
 *              type: object
 *              required:
 *                  -moviename
 *                  -movienamevn
 *                  -movielink
 *                  -imagelink
 *                  -imagebackgroundlink
 *              properties:
 *                  id:
 *                      type: string
 *                      description: mã phim
 *                  moviename:
 *                      type: string
 *                      description: tên phim
 *                  movienamevn:
 *                      type: string
 *                      description: tên phim bằng Tiếng Việt
 *                  trailerlink:
 *                      type: string
 *                      description: đường dẫn trailer
 *                  movielink:
 *                      type: string
 *                      description: đường dẫn phim 
 *                  imagelink:
 *                      type: string
 *                      description: đường dẫn ảnh
 *                  imagebackgroundlink:
 *                      type: string
 *                      description: đường dẫn ảnh bìa
 *                  description:
 *                      type: string
 *                      description: mô tả phim 
 *                  timeduration:
 *                      type: string
 *                      description: thời lượng phim
 *                  year:
 *                      type: string
 *                      description: năm phát hành
 *                  createdate:
 *                      type: Date
 *                      description: ngày cập nhật
 *                  national:
 *                      type: string
 *                      description: quốc gia
 *                  typemovie:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: thể loại 
 *                  actors:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: diễn viên
 */

/**
 * @swagger
 * /createmovie:
 *      post:
 *          security:
 *              - ApiKeyAuth: []
 *          tags: [Movie]
 *          summary: Tạo phim mới 
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          type: object
 *                          required:
 *                              -moviename
 *                              -movienamevn
 *                              -movielink
 *                              -image
 *                              -imagebackground
 *                          properties:
 *                              moviename:
 *                                  type: string
 *                              movienamevn:
 *                                  type: string
 *                              trailerlink:
 *                                  type: string
 *                              movielink:
 *                                  type: string
 *                              image:
 *                                  type: string
 *                                  format: binary
 *                              imagebackground:
 *                                  type: string
 *                                  format: binary
 *                              description:
 *                                  type: string
 *                              timeduration:
 *                                  type: string
 *                              year:
 *                                  type: string
 *                              national:
 *                                  type: string
 *                              typemovie:
 *                                  type: array
 *                                  items: 
 *                                       type: string
 *                              actors:
 *                                  type: array
 *                                  items: 
 *                                       type: string
 *          responses:
 *              200:
 *                  description: Thông báo đăng kí thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            item:
 *                              $ref:"#/components/schemas/Movie"
 */
const fileUpload = require('express-fileupload')
app.use(fileUpload())
app.post("/createmovie",token.checkTokenAdmin, (reqs, res) => {
    createMovieController(reqs, res)
})
module.exports = app;