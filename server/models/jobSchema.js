const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    jobName:{
        type:String,
        require:true
    },
    jobType:{
        type:String,
        require:true
    },
    Skills:{
        type:Array,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    Salary:{
        type:Number,
        require:true
    },
    Location:{
        type:String,
        require:true
    },
    deadline:{
        type:String,
        require:true
    },
    numberOfOpening:{
        type:String,
        require:true
        
    },
    requirements:{
        type:String,
        require:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company"
    },
    applied:[
{type:mongoose.Schema.Types.ObjectId,
    ref:"User"}
    ]
        
    
    
})

const Job = mongoose.model("Job",jobSchema)
module.exports = Job