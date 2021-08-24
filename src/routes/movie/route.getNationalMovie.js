const express = require('express');

const app = express()

const getNationalMovieController = require("../../controllers/controller.getNationalMovie")

/**
 * @swagger
 * /getnationalmovie:
 *      get:
 *          summary: lấy toàn bộ quốc gia
 *          tags: [Movie]
 * 
 *          responses:
 *              200:
 *                  description: Thông báo thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: Array
 */
app.get("/getnationalmovie", (reqs, res) => {
    getNationalMovieController(reqs, res)
})
module.exports = app;
