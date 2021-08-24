const express = require('express');

const app = express()

const getTypeMovieController = require("../../controllers/controller.getTypeMovie")

/**
 * @swagger
 * /gettypemovie:
 *      get:
 *          summary: lấy toàn bộ thể loại phim
 *          tags: [Movie]
 * 
 *          responses:
 *              200:
 *                  description: Thông báo thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 */
app.get("/gettypemovie", (reqs, res) => {
    getTypeMovieController(reqs, res)
})
module.exports = app;
