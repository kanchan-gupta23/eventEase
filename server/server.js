require("dotenv").config()
const express = require("express")
const  connection = require("./db/db")
const cloudinary = require("cloudinary").v2
const jobRouter = require("./Routers/jobRouter")
const userRouter = require("./Routers/UserRouter")
const companyRouter = require("./Routers/companyRouter")
const cors = require("cors")
const app = express()
app.use(express.json())
const CorsOptions = {
    origin:"http://localhost:5173",
    methods:["PUT","DELETE","POST","GET","PATCH"],
    credentials:true
}
app.use(cors(CorsOptions))

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET_KEY
})

app.use("/job",jobRouter)
app.use("/user",userRouter)
app.use("/company",companyRouter)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running on ",process.env.PORT );})
}

) 