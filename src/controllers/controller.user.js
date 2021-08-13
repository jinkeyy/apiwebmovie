const User = require("../models/models.user")

exports.getAllUser = async (reqs, res) => {
    try {
        const userList = await User.find();
        res.json(userList);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.findUser = async (reqs, res) => {
    try {
        const userList = await User.findOne({ "_id": reqs.params.userId});
        if(userList === null) return res.status(204).send(userList)
        res.json(userList);
    } catch (err) {
        res.status(400).send(err);
    }
}
exports.deleteUser = async (reqs, res) => {
    try {
        await User.findOneAndRemove({ "_id": reqs.params.userId});
        res.json({"notification":"done"});
    } catch (err) {
        res.status(400).json({"notification":"error"});
    }
}