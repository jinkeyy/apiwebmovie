const User = require("../models/models.user")
const bcrypt = require("bcryptjs")
loginController = async (reqs,res)=>{
    const userLogin = await User.findOne({email: reqs.body.email}).select('password');
    if(!userLogin) return res.status(400).send({"notification":"email does not exist"})
    console.log(userLogin)
    const passLogin = await bcrypt.compare(reqs.body.password, userLogin.password);
    if(!passLogin) return res.status(400).send({"notification":"incorrect password"})
    const user = await User.findOne({email: reqs.body.email})
    res.json(user)
}
module.exports = loginController