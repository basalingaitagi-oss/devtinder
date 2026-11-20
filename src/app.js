const express = require("express");
const connectDB = require('./config/database');
const User = require('./models/user')
const app = express();

const PORT = "7777";

//Which wil work for all routes , and convert json to js object
app.use(express.json());

app.post('/signup',async (req,res)=>{
    try{
         const userObj = {
        username : "anil",
        emailId:"anil@gmail.com",
        password:"1234"
    }
   const user  = new User(userObj);
   await user.save();
   res.send("User inserted succesfully")
    }catch(err){
         res.status(500).send("User not inserted succesfully")
    }
   
})
connectDB().then(()=>{
    console.log("Database connection is established");
    app.listen(PORT, ()=>{
    console.log("App is listening on port,"+PORT)
})
}).catch(err => {
    console.error("Database connection is error",err)
})

