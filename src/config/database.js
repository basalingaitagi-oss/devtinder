const mongoose  = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://basalingaitagi_db_user:rsKGZaBphzalRZ0w@cluster0.fpp3xud.mongodb.net/devTinder");
}

module.exports = connectDB;


