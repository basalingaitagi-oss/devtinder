const express = require("express");
const connectDB = require('./config/database');
const User = require('./models/user')
const app = express();

const PORT = "7777";

//Which wil work for all routes , and convert json to js object
app.use(express.json());

app.post('/signup',async (req,res)=>{
    try{
        const userObj = req.body;
        const user  = new User(userObj);
   await user.save();
   res.send("User inserted succesfully")
    }catch(err){
         res.status(500).send("User not inserted succesfully,"+err)
    }
   
})


app.get("/getUers",async(req,res) =>{
    try{
        const users = await User.find({});
        res.status(200).json({errorcode:0,users})
    }catch(err){
res.status(500).send("Users not fetched");
    }
})

app.patch('/userupdate',async (req,res)=>{
  try{
      const userId = req.body.userId;
      const updateData = req.body;
       await User.findByIdAndUpdate(userId,updateData);
        res.send("User updated succesfully")
  }catch(err){
    console.log("Error",err)
        res.status(500).send("User not updated succesfully,"+err);
  }
})

app.delete('/deleteUser', async(req,res)=>{
    try{
         const userId = req.body.userId;
          await User.findByIdAndDelete(userId);
        res.send("User deleted succesfully");
    }catch(err){
        res.status(500).send("User not deleted,"+err);
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

