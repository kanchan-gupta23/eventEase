const uploadCloundinary = require("../feature")
const User = require("../models/user/userSchema");

const Registration = async (req,res) => {
    try {
        const {username,email,password,phone,skills,about} = req.body
        const {avatar,pdf} = req.files
        if(!avatar||!pdf){
         return res.status(400).json({msg:"Avatar or Pdf not found"})
        }
const avatarUrl = await uploadCloundinary(avatar[0].path,"avatars")
const pdfUrl = await uploadCloundinary(pdf[0].path,"pdf")
        const user = await User.findOne({email})
        if(user){
          return  res.status(400).json({msg:"user already exists"})
        }
        const createUser  = await  User.create({username,email,password,phone,skills,about,avatar:avatarUrl,resume:pdfUrl})
        const token =  createUser.generateToken()
       return res.status(200).json({createUser,token,msg:"registration done successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

const Login = async (req,res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:"user is not found "})
        }
      
        const CompPassword = await user.comparePassword(password)
        if (!CompPassword) {
            return res.status(400).json({msg:"incorrect password"})
            
        }
        const token = user.generateToken()
        return  res.status(200).json({user,token,msg:"user login successfully"})

    } catch (error) {
        console.log(error);
        
    }
}

const getUserById = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        if(!user){
            return res.status(400).json({msg:"user not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}
const updateProfile = async (req,res) => {
    try {
        const {id} =req.params       
        const {username,email,password,phone,skills,about} = req.body
        const {avatar,pdf} = req.files
        if(!avatar||!pdf){
         return res.status(400).json({msg:"Avatar or Pdf not found"})
        }
const avatarUrl = await uploadCloundinary(avatar[0].path,"avatars")
const pdfUrl = await uploadCloundinary(pdf[0].path,"pdf")
const user = await User.findById(id)
if(!user){
    return res.status(400).json({msg:"user not found"})
}
        const update = await User.findByIdAndUpdate(id,{username,email,password,phone,skills,about,Avatar:avatarUrl,resume:pdfUrl})
        return res.status(200).json(update)
    } catch (error) {
        console.log(error);
        
    }
}

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find()
        if (!users.length === 0) {
            return res.status(400).json({msg:"No user found"})
        }
        return res.status(200).json({users,msg:"users found successfully"})
        
    } catch (error) {
        console.log(error);
        
    }
}
const getUserBySkillAndName = async (req,res) => {
    try {
        const {skills,username} = req.query
        let filter ={}
          if (skills) filter.skills = {$regex:skills,$options:"i"}
         if(username)  filter.username = {$regex:username,$options:"i"}
        const users = await User.find(filter)
        if (!users.length === 0) {
            return res.status(400).json({msg:"No user found"})
        }
        return res.status(200).json({users,msg:"users found successfully"})
    } catch (error) {
       console.log();
        
    }
}
const applyJob = async (req,res) => {
    try {
        const {id} = req.params
        const{userId}= req.body
       const user = await User.findById(userId)
       if (!user) {
        return res.status(400).json({msg:" user not found"})
       }
       if (!Array.isArray(user.appliedJobs)) {
        user.appliedJobs = [];
      }
  
      // Prevent duplicate applications
      if (user.appliedJobs.includes(id)) {
        return res.status(400).json({ msg: "You have already applied for this job" });
      }
       user.appliedJobs.push(id)
       await user.save()
       return res.status(200).json({user,msg:" successfully applied for the job"})
    } catch (error) {
        console.log(error);
        
    }
}

const getAplliedAllJobs = async (req,res) => {
    const {id} = req.params
    const jobs = await User.findById(id).populate("appliedJobs")
    return res.status(200).json(jobs)
}
const DelApplied = async (req,res) => {
    try {
        const {id} = req.params
        const {jobId} = req.body
        const user = await User.findById(id)
        user.appliedJobs= user.appliedJobs.filter((job)=>job.toString()!==jobId)
        await user.save()
        return res.status(200).json({ user, msg: "Job removed from applied list" })
    } catch (error) {
        console.log(error);
        
    }
}

const getUser = async (req,res) => {
    try {
        const user = req.user
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {Registration,Login,getUserById,updateProfile,getAllUsers ,getUserBySkillAndName,applyJob,getAplliedAllJobs,DelApplied,getUser}