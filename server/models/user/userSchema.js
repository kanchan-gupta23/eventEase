const mongoose  = require("mongoose")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")



const userSchema = mongoose.Schema(
    {
        username :{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        Avatar:{
           url:{type:String,},
           public_id:{type:String,}
        },
        skills:[{
            type:String,
            required:true
        }]
        ,
        about:{
            type:String,
            required:true
        },
        resume:{
            url:{type:String},
            public_id:{type:String}
        },
        appliedJobs:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Job"
        }]
    }
)
userSchema.pre("save",async function  hashhPassword(next)
    
  {
    try {
        if (!this.isModified("password")) {
         return   next()
        }
       const hash= await bcrypt.hash(this.password, 10)
       this.password = hash
       next()
    } catch (error) {
        console.log(error);
        
    }
})

userSchema.methods.comparePassword = async function (password)  {
   try {
    const compare = await bcrypt.compare(password,this.password)
    return compare
   } catch (error) {
    console.log(error);
    
   }
}

userSchema.methods.generateToken = function ()  {
    try {
       const token=  jwt.sign({  id: this._id,
            email: this.email,},process.env.JWT_SIGNATURE,{
            expiresIn:"100d"
        })
        return token
    } catch (error) {
        console.log(error);
        
    }
}




const User = mongoose.model("User", userSchema)
module.exports = User