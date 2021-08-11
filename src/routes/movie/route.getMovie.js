const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const getMovieController = require("../../controllers/controller.getMovie.js")

/**
 * @swagger
 * /getmovie:
 *      get:
 *          summary: Lấy về một phim 
 *          tags: [Movie] 
 *          parameters['id'] : 
 *              description: 'movie id'            
 *                                 
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
app.get("/getmovie", (reqs, res) => {
    getMovieController(reqs, res)
})
module.exports = app;
