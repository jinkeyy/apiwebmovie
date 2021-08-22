const userController = require("../../controllers/controller.user")
const token = require("../../middleware/token")
module.exports = function (app) {
    /**
 * @swagger
 * /getuser:
 *      get:
 *          security:
 *              - ApiKeyAuth: []
 *          summary: Lấy về toàn bộ user, chỉ role admin có quyền
 *          tags: [User]
 *          responses:
 *              200:
 *                  description: Thông báo thành công 
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: object
 *                            item:
 *                              $ref:"#/components/schemas/User"
 */

    app.route('/getuser').get(token.checkTokenAdmin, userController.getAllUser)

    /**
* @swagger
* /getuser/{userId}:
*      get:
*          security:
*              - ApiKeyAuth: []
*          summary: Lấy về user theo id
*          tags: [User]
*          parameters:
*               - in: path
*                 name: userId
*                 schema:
*                   type: string
*                   required: true
*                   description: id của user
*          responses:
*              200:
*                  description: Thông báo thành công 
*                  content:
*                      application/json:
*                          schema:
*                            type: object
*                            item:
*                              $ref:"#/components/schemas/User"
*/
    app.route('/getuser/:userId').get(token.checkTokenGuest, userController.findUser)
    /**
* @swagger
* /deleteuser/{userId}:
*      put:
*          security:
*              - ApiKeyAuth: []
*          summary: xóa user theo id, chỉ role admin có quyền
*          tags: [User]
*          parameters:
*               - in: path
*                 name: userId
*                 schema:
*                   type: string
*                   required: true
*                   description: id của user
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
    app.route('/deleteuser/:userId').put(token.checkTokenAdmin, userController.deleteUser)

    /**
 * @swagger
 * /updateuser/{userId}:
 *      put:
 *          security:
 *              - ApiKeyAuth: []
 *          summary: cập nhật user theo id 
 *          tags: [User]
 *          parameters:
 *               - in: path
 *                 name: userId
 *                 schema:
 *                   type: string
 *                   required: true
 *                   description: id của user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
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
    app.route('/updateuser/:userId').put(token.checkTokenGuest, userController.updateUser)
}
