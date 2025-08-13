const Company = require("../models/company/companySchema");
const sendEmail = require("../uitils/sendEmail");

const Registration = async (req,res) => {
    try {
        const {companyName,email,password,website,phone,about}= req.body
        const exists = await Company.findOne({email})
        if (exists) {
            return res.status(400).json({msg:"company already exists"})
        }
        const company = await Company.create({companyName,email,password,website,phone,about})
        const token = await company.generateToken()
        return res.status(200).json({company,token,msg:"company has registerd successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

const Login = async (req,res) => {
    try {
        const {email,password} = req.body
        const exists = await Company.findOne({email})
        if (!exists) {
            return res.status(400).json({msg:"company  is not found"})
        }
        const CompPassword = await exists.comparePassword(password)
        if (!CompPassword) {
            return res.status(400).json({msg:"incorrect password"})
        }
        const token = await exists.generateToken()
        return res.status(200).json({exists,token,msg:"Company login successfully"})
        
    } catch (error) {
        console.log(error);
        
    }
}

const getCompById = async (req,res) => {
    try {
        const {id}= req.params
        const exists= await Company.findById(id)
        if (!exists) {
            return res.status(400).json({msg:"company  is not found"})
        }
        return res.status(200).json({exists,msg:"Company found successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

const getCompBYQuery = async (req,res) => {
    try {
        const {companyName} = req.query
        const exists= await Company.find({companyName:{$regex:companyName,$options:"i"}})
        if (!exists.length === 0) {
            return res.status(400).json({msg:"No companies found"})
        }
        return res.status(200).json({exists,msg:"Company found successfully"})
    } catch (error) {
      console.log(error);
        
    }
}

const updateProfile = async (req,res) => {
    try {
        const {id} = req.params
        const { companyName, email, password, website, phone, about } = req.body;
        const exists = await Company.findById(id)
        if (!exists) {
            return res.status(400).json({msg:"company  is not found"})
        }
        const updatedProfile = await Company.findByIdAndUpdate(id,{companyName,email,password,website,phone,about},{new:true})

return res.status(200).json(updatedProfile,{msg:"profile Updated Successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

const getAllComp = async (req, res) => {
    try {
        const companies = await Company.find()
        if (!companies.length === 0) {
            return res.status(400).json({msg:"No companies found"})
        }
        return res.status(200).json({companies,msg:"Company found successfully"})
        
    } catch (error) {
        console.log(error);
        
    }
}

const getCompAllJobs = async (req, res) => {
    try {
      const { id } = req.params;
  
      const company = await Company.findById(id).populate("jobs");
  
      if ( !company.jobs ) {
        return res.status(400).json({ msg: "Jobs are not available" });
      }
  
      return res.status(200).json(company.jobs);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error" });
    }
  };
  
const getComp = async (req,res) => {
    try {
        const company = req.company
        return res.status(200).json(company)
    } catch (error) {
      console.log(error);
        
    }
}

const companyAppliedJobs = async (req,res) => {
    try {
        const {id} = req.params
       
        const comp = await Company.findById(id).populate({
            path: "jobs",
            populate: { path: "applied", model: "User" }
          });
        if( !comp){
            return res.status(400).json({msg:" comp do not exists"})
        }
        return res.status(200).json(comp)
  
    } catch (error) {
        console.log(error);
        
    }
}

const acceptUser = async (req,res) => {
   try {
    const{id} = req.params
    const{userId} = req.body
    const comp = await Company.findById(id)
    if (!comp) {
        return res.status(400).json({msg:"Company not found"})        
    }    
    if (comp.accept.includes(userId)) {
        return res.status(400).json({msg:"user already accepted"})        
    }   
     comp.reject =  comp.reject.filter((user)=>user._id.toString()!==userId)
     comp.accept.push(userId)
     await comp.save()
const user = await User.findById(userId)
if(user && user.email){
await sendEmail(
    user.email,
    "Application Accepted ✅",
     `Hello ${user.username},\n\nCongratulations! Your application has been accepted by ${comp.companyName}.\n\nBest regards,\n${comp.companyName} Team`
)
}
    return res.status(200).json({comp,msg:"company accepted to the user"})   
   } catch (error) {
    console.log(error);
    
   } 
}

const rejectUser = async (req,res) => {
    try {
        const{id} = req.params
        const{userId} = req.body
        const comp = await Company.findById(id)
        if (!comp) {
            return res.status(400).json({msg:"Company not found"})        
        }    
        if (comp.reject.includes(userId)) {
            return res.status(400).json({msg:"user already rejected"})        
        }   
         comp.accept =  comp.accept.filter((user)=>user._id.toString()!==userId)
         comp.reject.push(userId)
         await comp.save()
    
        return res.status(200).json({comp,msg:"company rejected to the user"})   
       } catch (error) {
        console.log(error);
        
       } 
    
}

module.exports={Registration,Login,getCompBYQuery,getCompById,updateProfile,getAllComp,getCompAllJobs,getComp,companyAppliedJobs,acceptUser,rejectUser}