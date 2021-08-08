const User = require("../models/models.user")
loginController = async (reqs,res)=>{
    const userLogin = await User.findOne({email: reqs.body.email});
    if(!userLogin) return res.status(400).send({"notification":"email does not exist"})
    const checkLogin = await User.findOne({email: reqs.body.email,password: reqs.body.password});
    if(!checkLogin) return res.status(400).send({"notification":"incorrect password"})
    res.status(200).send(checkLogin)
}
module.exports = loginController