const mongoose = require("mongoose")

const connection = async () => {
 await   mongoose.connect(process.env.MONGODB_URL)
 console.log("db connected successfully");
 
}
module.exports = connection