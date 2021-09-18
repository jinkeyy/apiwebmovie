const User = require("../models/models.user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") 
loginController = async (reqs,res)=>{
    const userLogin = await User.findOne({email: reqs.body.email}).select('password');
    if(!userLogin) return res.status(400).send({"notification":"email does not exist"})
    const passLogin = await bcrypt.compare(reqs.body.password, userLogin.password);
    if(!passLogin) return res.status(400).send({"notification":"incorrect password"})
    const user = await User.findOne({email: reqs.body.email})
    const token = jwt.sign({_id: user._id}, 'daylamatkhau')
    // res.header("Authorization", token).json({"token":token});
    res.json({...user._doc,"token":token});
}
module.exports = loginController