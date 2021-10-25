const searchMovieController = require("../../controllers/controller.searchMovie")
const express = require('express');
const app = express()
app.get("/searchmovie", (reqs, res) => {
    searchMovieController(reqs, res)
})
module.exports = app;

/**
 * @swagger
 * /searchmovie:
 *      get:
 *          summary: tìm kiếm phim theo keywork có phân trang
 *          tags: [Movie] 
 *          parameters:
 *               - in: query
 *                 name: key
 *                 schema:
 *                   type: string
 *                   description: keywork
 *               - in: query
 *                 name: pageIndex
 *                 schema:
 *                   type: String
 *                   description: keywork 
 *               - in: query
 *                 name: pageSize
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