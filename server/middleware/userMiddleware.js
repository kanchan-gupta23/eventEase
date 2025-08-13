const jwt = require("jsonwebtoken")

const User = require("../models/user/userSchema")
const userAuth = async (req,res,next) => {
   try {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(400).json({msg:"token not found"})
    }

    const authToken  = token.replace("Bearer","").trim()

    const decode = await jwt.decode(authToken,process.env.JWT_SIGNATURE)
    const user = await User.findOne({email:decode.email})
    if (!user) {
        return res.status(400).json({msg:"invalid token user not found"})
    }

    req.user = user
    req.id = user._id
    req.token = authToken
    next()
   } catch (error) {
    console.log(error);
    
   }
}

module.exports = userAuth


