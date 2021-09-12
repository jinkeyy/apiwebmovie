const rateControlller = require("../../controllers/controller.rate")
const token = require("../../middleware/token")
module.exports = function (app) {
    app.route("/createrate").post(rateControlller.create)
    app.route('/getratebymovie/:movieId').get(rateControlller.getratebymovie)
    app.route("/deleterate/:rateId").delete(rateControlller.delete)
}
