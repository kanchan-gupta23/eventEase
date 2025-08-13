const Company = require("../models/company/companySchema");
const Job = require("../models/jobSchema");

const job = async (req,res) => {
    try {
        const {jobName,jobType,Skills,description, Salary,Location,deadline,numberOfOpening,requirements} = req.body
        const {company} = req.params
        const job = await Job.create({jobName,jobType,Skills,description, Salary,Location,deadline,numberOfOpening,requirements,company})
        const CompanyData = await Company.findById(company)
        CompanyData.jobs.push(job)
        await CompanyData.save()
        return res.status(200).json({job,msg:"job created successfully"})
    } catch (error) {
        console.log(error);        
    }
}

const applyJob = async (req,res) => {
    try {
        const {id} = req.params
        const {userId}= req.body
     
     const job = await Job.findById(id)
     if(!job){
        return res.status(400).json({msg:"job not found"})
     }
     if(job.applied.includes(userId)){
        return res.status(400).json({msg:"already applied for the job"})
     }
    job.applied.push(userId)
    await job.save()
        return res.status(200).json({job,msg:"job applied successfully"})        
    } catch (error) {
       console.log(error);        
    }
}

const UpdateJob = async (req,res) => {
    try {
        const {id} = req.params
        const updates = {};
        const allowedFields = [
            "jobName",
            "jobType",
            "Skills",
            "description",
            "Salary",
            "Location",
            "deadline",
            "numberOfOpening",
            "requirements",
            "CompanyName"
        ];

        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) {
                updates[field] = req.body[field];
            }
        });
        const job = await Job.findByIdAndUpdate(id,updates,{new:true})
        return res.status(200).json({job,msg:"job updated successfully"})
    } catch (error) {
        console.log(error);        
    }
}

const delJob = async (req,res) => {
    try {
        const {id} = req.params
        const job = await Job.findByIdAndDelete(id)
        if(!job){
            return res.status(400).json({msg:"job not found"})
        }
        return res.status(200).json({job,msg:"job deleted successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

const getById = async (req,res) => {
    try {
        const {id} = req.params
        const job = await Job.findById(id).populate("company")
        if(!job){
            return res.status(400).json({msg:"job not found"})
        }
        return res.status(200).json({job,msg:"job found successfully"})

    } catch (error) {
        console.log(error);
        
    }
}

const AllJobs = async (req,res) => {
    try {
        const job = await Job.find().populate("company")
        if(job.length===0){
            return res.status(400).json({msg:"no job is available"})
        }
        return res.status(200).json({job,msg:"job found successfully"})

    } catch (error) {
       console.log(error);
        
    }
}

const getByQuery = async (req,res) => {
    try {
        const { jobName,jobType,Skills} = req.query
        const filter = {};

        if (jobName) filter.jobName = { $regex: jobName, $options: "i" };  
        if (jobType) filter.jobType = { $regex: jobType, $options: "i" };
        if (Skills) filter.Skills = { $regex: Skills, $options: "i" };

        const jobs = await Job.find(filter);

        return res.status(200).json({ jobs });
    } catch (error) {
        console.log(error);
        
    }
}


module.exports= {job,applyJob,UpdateJob,delJob,getById,AllJobs,getByQuery}