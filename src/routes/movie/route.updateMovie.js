const express = require('express');
const token = require("../../middleware/token")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const updateMovieController = require("../../controllers/controller.updateMovie.js")

/**
 * @swagger
 * /updatemovie/{movieId}:
 *      put:
 *          security:
 *              - ApiKeyAuth: []
 *          summary: Update phim 
 *          tags: [Movie]
 *          parameters:
 *               - in: path
 *                 name: movieId
 *                 schema:
 *                   type: string
 *                   required: true
 *                   description: id của movie  
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
 *                      schema:
 *                          type: object
 *                          required:
 *                              -moviename
 *                              -movielink
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
 *                  description: Sửa phim thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            item:
 *                              $ref:"#/components/schemas/Movie"
 */
app.put("/updatemovie/:movieId",token.checkTokenAdmin, (reqs, res) => {
    updateMovieController(reqs, res)
})
module.exports = app;