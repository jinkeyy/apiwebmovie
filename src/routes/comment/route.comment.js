const commentControlller = require("../../controllers/controller.comment")
const token = require("../../middleware/token")
module.exports = function (app) {
    /**
* @swagger
* /getcommentbymovie/{movieId}:
*      get:
*          summary: Lấy bình luận theo movie
*          tags: [Comment]
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
    app.route('/getcommentbymovie/:movieId').get(commentControlller.getbyMovie)
    /**
* @swagger
* /getcommentbyuser/{userId}:
*      get:
*          summary: Lấy bình luận theo movie
*          tags: [Comment]
*          parameters:
*               - in: path
*                 name: movie
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
    app.route('/getcommentbyuser/:userId').get(commentControlller.getByUser)
    /**
* @swagger
* /createcomment:
*      post:
*          summary: Tạo bình luận mới
*          tags: [Comment]
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          required:
*                              -comment
*                              -user
*                              -movie
*                          properties:
*                              comment:
*                                  type: string
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
    app.route("/createcomment").post(commentControlller.create)
    /**
* @swagger
* /deletecomment/{commentId}:
*      delete:
*          summary: xóa bình luận theo id comment
*          tags: [Comment]
*          parameters:
*               - in: path
*                 name: commentId
*                 schema:
*                   type: string
*                   required: true
*                   description: id của comment
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
    app.route("/deletecomment/:commentId").delete(commentControlller.delete)
    /**
 * @swagger
 * /updatecomment/{commmentId}:
 *      put:
 *          summary: cập nhật bình luận theo id bình luận
 *          tags: [Comment]
 *          parameters:
 *               - in: path
 *                 name: commmentId
 *                 schema:
 *                   type: string
 *                   required: true
 *                   description: id của comment
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              -comment
 *                              -user
 *                              -movie
 *                          properties:
 *                              comment:
 *                                  type: string
 *                              user:
 *                                  type: string 
 *                                  example: userId
 *                              movie:
 *                                  type: string
 *                                  example: movieId
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
    app.route('/updatecomment/:commentId').put(commentControlller.update)
}
