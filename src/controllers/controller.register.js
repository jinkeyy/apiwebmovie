const User = require("../models/models.user")
const express = require("express")
const app = express()
const bcrypt = require("bcryptjs")
registerController = async (reqs,res)=>{
    if(reqs.body.username && reqs.body.email && reqs.body.email ){
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(reqs.body.password,salt)
        const newUser = new User();
        newUser.username = reqs.body.username
        newUser.email = reqs.body.email
        newUser.password = hashPass
        try{
            const User = await newUser.save()
            res.send(User);
        }catch(err){
            res.status(400).send(err);
        }
    }else{
        res.status(400).send("lỗi "+reqs.body.email );
    }

}
module.exports = registerController