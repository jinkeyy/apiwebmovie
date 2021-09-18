const jwt = require("jsonwebtoken")
const User = require("../models/models.user")
exports.checkTokenAdmin = async function(req, res, next){
   const token = req.header('token');
   if(!token) return res.status(401).send("Bạn không thể truy cập vào được xin hãy đăng nhập")
   try{
       const checkToken = jwt.verify(token, 'daylamatkhau')
       const checkRole = await User.findById(checkToken._id)
       if(checkRole.role != "admin") return res.status(403).send("Chỉ có admin mới có quyền")
       req.user = checkToken
       next()
   }catch(err){
       res.status(403).send("Token không hợp lệ")
   }
}
exports.checkTokenGuest = function(req, res, next){
    const token = req.header('token');
    if(!token) return res.status(401).send("Bạn không thể truy cập vào được xin hãy đăng nhập")
    try{
        const checkToken = jwt.verify(token, 'daylamatkhau')
        req.user = checkToken
        next()
    }catch(err){
        res.status(403).send('Token không hợp lệ')
    }
 }