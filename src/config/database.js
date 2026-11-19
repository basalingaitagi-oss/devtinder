const mongoose  = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://basalingaitagi_db_user:rsKGZaBphzalRZ0w@cluster0.fpp3xud.mongodb.net/");
}

module.exports = connectDB;

// connectDB().then(()=>{
//     console.log("Database connection is established")
// }).catch(err => {
//     console.error("Database connection is error",err)
// })
