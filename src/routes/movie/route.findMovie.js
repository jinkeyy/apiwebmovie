const findMovieController = require("../../controllers/controller.findMovie")
const express = require('express');
const app = express()
app.get("/findmovie", (reqs, res) => {
    findMovieController(reqs, res)
})
module.exports = app;

/**
 * @swagger
 * /findmovie:
 *      get:
 *          summary: tìm kiếm  phim theo keywork
 *          tags: [Movie] 
 *          parameters:
 *               - in: query
 *                 name: key
 *                 schema:
 *                   type: string
 *                   description: keywork  
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
