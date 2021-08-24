const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const filterMovieController = require("../../controllers/controller.filterMovie.js")

/**
 * @swagger
 * /filter:
 *      get:
 *          summary: Lọc phim theo keywork
 *          tags: [Movie] 
 *          parameters:
 *               - in: query
 *                 name: typemovie
 *                 schema:
 *                   type: string
 *                   description: keywork  
 *               - in: query
 *                 name: national
 *                 schema:
 *                   type: string
 *                   description: keywork             
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
 app.get("/filter", (reqs, res) => {
    filterMovieController(reqs, res)
})
module.exports = app;
