const express = require("express");
const app = express();

const PORT = "7777";

app.use("/login",(req,res)=>{
    res.send("now started to handle request,login");
})

app.listen(PORT, ()=>{
    console.log("App is listening on port,"+PORT)
})