const express = require('express');

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
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              -moviename
 *                              -movielink
 *                              -imagelink
 *                          properties:
 *                              moviename:
 *                                  type: string
 *                              trailerlink:
 *                                  type: string
 *                              movielink:
 *                                  type: string
 *                              imagelink:
 *                                  type: string
 *                              description:
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
 *
 *                              
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
app.put("/updatemovie/:movieId", (reqs, res) => {
    updateMovieController(reqs, res)
})
module.exports = app;