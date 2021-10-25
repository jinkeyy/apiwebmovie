const express = require('express');

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.raw())

const sortMovieByDateController = require("../../controllers/controller.sortMovieByDate.js")
/**
 * @swagger
 * /sortmovie:
 *      get:
 *          summary: Lấy về toàn bộ phim
 *          tags: [Movie]
 * 
 *          responses:
 *              200:
 *                  description: Thông báo thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            item:
 *                              $ref:"#/components/schemas/Movie"
 */
app.get("/sortmovie", (reqs, res) => {
    sortMovieByDateController(reqs, res)
})
module.exports = app;