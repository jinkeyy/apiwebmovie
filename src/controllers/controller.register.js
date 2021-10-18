const User = require("../models/models.user")
const express = require("express")
const app = express()
const bcrypt = require("bcryptjs")
registerController = async (reqs, res) => {
    if (reqs.body.username && reqs.body.email && reqs.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(reqs.body.password, salt)
        const newUser = new User();
        newUser.username = reqs.body.username
        newUser.dob = reqs.body.dob
        newUser.email = reqs.body.email
        newUser.password = hashPass
        try {
            const User = await newUser.save()
            res.send(User);
        } catch (err) {
            if (err.keyValue.email) {
                res.status(400).json({ error: "Email đã được đăng kí" })
            } else {
                res.status(400).json(err);
            }
        }
    } else {
        res.status(400).json({ error: "Chưa điền đủ thông tin" });
    }

}
module.exports = registerController