const jwt = require("jsonwebtoken")
const Company = require("../models/company/companySchema")
const CompAuth = async (req,res,next) => {
   try {
    const token = req.header("Authorization")
    if (!token) {
        return res.status(400).json({msg:"token not found"})
    }

    const authToken  = token.trim().replace("bearer","")

    const decode = await jwt.decode(authToken,process.env.JWT_SIGNATURE)
    const company = await Company.findOne({email:decode.email})
    if (!company) {
        return res.status(400).json({msg:"invalid token company not found"})
    }

    req.company = company
    req.id = company._id
    req.token = authToken
    next()
   } catch (error) {
    console.log(error);
    
   }
}

module.exports = CompAuth


