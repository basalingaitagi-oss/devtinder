const express = require("express");
const connectDB = require('./config/database')
const app = express();

const PORT = "7777";

connectDB().then(()=>{
    console.log("Database connection is established");
    app.listen(PORT, ()=>{
    console.log("App is listening on port,"+PORT)
})
}).catch(err => {
    console.error("Database connection is error",err)
})

