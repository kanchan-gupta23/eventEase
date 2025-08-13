const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { type } = require("os");
const { rejects } = require("assert");

const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },website:{
        type:String,
        
    },
    phone:{
        type:String,
        required:true
    }, 
    about:{
        type:String,
        required:true
    },
    jobs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }],
    accept:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }],
    reject:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }]

   
})

companySchema.pre("save", async function (next) {
    console.log("Pre-save triggered for:", this.email); // Debug
  
    if (!this.isModified("password")) return next();
    
    this.password = await bcrypt.hash(this.password, 10);
    console.log("Password hashed for:", this.email); // Debug
    
    next();
  });

companySchema.methods.comparePassword = async function (password) {
    try {
        const compPassword = await bcrypt.compare(password,this.password)
        return compPassword
    } catch (error) {
     console.log(error);
        
    }    
}
companySchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({id:this._id,  email: this.email},process.env.JWT_SIGNATURE,{expiresIn:"100d"})
        return token
    } catch (error) {
        console.log(error);
        
    }
}
const Company = mongoose.model("Company", companySchema)
module.exports = Company