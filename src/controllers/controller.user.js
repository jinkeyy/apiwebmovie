const User = require("../models/models.user")


exports.getAllUser = async(reqs, res) => {
    try {
        const userList = await User.find();
        res.json(userList);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.findUser = async (reqs, res) => {
    try {
        const userList = await User.findOne({ "_id": reqs.params.userId });
        if (userList === null) return res.status(204).send(userList)
        res.json(userList);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.deleteUser = async (reqs, res) => {
    try {
        await User.findOneAndRemove({ "_id": reqs.params.userId });
        res.json({ "notification": "done" });
    } catch (err) {
        res.status(400).json({ "notification": "error" });
    }
}
exports.updateUser = async (reqs, res, next) => {
    let { body, params } = reqs
    try {
        await User.findById(params.userId).exec((error, user) => {
            if (!user) return res.status(400).json({ "notification": 'không tồn tại id ' + params.userId })
        })
    } catch (error) {
        return res.status(400).json({ "notification": 'error' })
    }
    if (!body.email) return res.status(400).json({ "notification": "email không được để trống" })
    if (!body.username) return res.status(400).json({ "notification": "user không được để trống" })
    try {
        await User.findByIdAndUpdate(params.userId, body, { new: true, runValidators: true })
        res.json({ "notification": "done" })
    } catch (error) {
        res.status(500).send(error)
    }
}