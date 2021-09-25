const rateControlller = require("../../controllers/controller.rate")
const token = require("../../middleware/token")
module.exports = function (app) {
    /**
* @swagger
* /createrate:
*      post:
*          security:
*              - ApiKeyAuth: []
*          summary: Tạo đánh giá mới
*          tags: [Rate]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          required:
*                              -rate
*                              -user
*                              -movie
*                          properties:
*                              rate:
*                                  type: number
*                                  example: 5
*                              user:
*                                  type: string 
*                                  example: userId
*                              movie:
*                                  type: string
*                                  example: movieId
*          responses:
*              200:
*                  description: Thông báo thành công 
*                  content:
*                      application/json:
*                          schema:
*                            type: object
*/
    app.route("/createrate").post(token.checkTokenGuest, rateControlller.create)
    /**
* @swagger
* /getratebymovie/{movieId}:
*      get:
*          summary: Lấy đánh giá theo movie
*          tags: [Rate]
*          parameters:
*               - in: path
*                 name: movieId
*                 schema:
*                   type: string
*                   required: true
*                   description: id của movie
*          responses:
*              200:
*                  description: Thông báo thành công 
*                  content:
*                      application/json:
*                          schema:
*                            type: array
*/
    app.route('/getratebymovie/:movieId').get(rateControlller.getratebymovie)
    /**
* @swagger
* /deleterate/{rateId}:
*      delete:
*          security:
*              - ApiKeyAuth: []
*          summary: xóa bình luận theo id rate
*          tags: [Rate]
*          parameters:
*               - in: path
*                 name: rateId
*                 schema:
*                   type: string
*                   required: true
*                   description: id của rate
*          responses:
*              200:
*                  description: Thông báo xóa thành công 
*                  content:
*                      application/json:
*                          schema:
*                            type: object
*                            properties:
*                               notification:
*                                   type: string
*                                   description: done
*              400:
*                  description: Bad request. 
*                  content:
*                      application/json:
*                          schema:
*                            type: object
*                            properties:
*                               notification:
*                                   type: string
*                                   description: error
*/
    app.route("/deleterate/:rateId").delete(token.checkTokenGuest, rateControlller.delete)
    /**
* @swagger
* /getrateavgbymovie/{movieId}:
*      get:
*          summary: Lấy đánh giá trung bình theo movie
*          tags: [Rate]
*          parameters:
*               - in: path
*                 name: movieId
*                 schema:
*                   type: string
*                   required: true
*                   description: id của movie
*          responses:
*              200:
*                  description: Thông báo thành công 
*                  content:
*                      application/json:
*                          schema:
*                            type: json
*/
    app.route("/getrateavgbymovie/:movieId").get(rateControlller.getRateAvg)
}
