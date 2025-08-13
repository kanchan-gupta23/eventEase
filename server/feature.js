
const cloudinary = require("cloudinary").v2
const uuid = require("uuid").v4


const uploadCloundinary = async (files =[]) => {
    if (!files) {
        console.log("file is not find");          
    }
const uploadpromise = await files.map((file)=>{
    return new Promise((resolve,reject)=>{
if (!file.buffer) {
   return reject("file is undefined")
}
const public_id = uuid()
const stream = cloudinary.uploader.upload_stream({
resource_type:"raw",
public_id,
},(result,error)=>{
    if (error) {
       return reject("file failed to upload"+error.message)        
    }
   return resolve({
    public_id:result.public_id,
    url:result.secure_url
   })
})
stream.end(file.buffer)
})


})

const results = await Promise.all(uploadpromise)
return results
    
}

module.exports= uploadCloundinary
