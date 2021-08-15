const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const deleteMovieController = require("../../controllers/controller.deleteMovie.js")

/**
 * @swagger
 * /deletemovie/{movieId}:
 *      delete:
 *          summary: Lấy về một phim 
 *          tags: [Movie] 
 *          parameters:
 *               - in: path
 *                 name: movieId
 *                 schema:
 *                   type: string
 *                   required: true
 *                   description: id của movie            
 *                                 
 *          responses:
 *              200:
 *                  description: Thông báo lấy dữ liệu thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            item:
 *                              $ref:"#/components/schemas/Movie"
 */
 app.delete("/deletemovie/:movieId", (reqs, res) => {
    deleteMovieController(reqs, res)
})
module.exports = app;