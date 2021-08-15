const userController = require("../../controllers/controller.user")
module.exports = function (app) {
    /**
 * @swagger
 * /getuser:
 *      get:
 *          summary: Lấy về toàn bộ user
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
    app.route('/getuser').get(userController.getAllUser)

    /**
* @swagger
* /getuser/{userId}:
*      get:
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
    app.route('/getuser/:userId').get(userController.findUser)
    /**
* @swagger
* /deleteuser/{userId}:
*      delete:
*          summary: xóa user theo id
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
    app.route('/deleteuser/:userId').delete(userController.deleteUser)
}
