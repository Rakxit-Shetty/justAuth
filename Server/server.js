const express=require('express');
const cors = require("cors");
const app=express();


app.use(cors());
app.use("/user",(req,res)=>{
    console.log("hit2021");
    return res.status(200).send({"fayi":"fai"})
})

app.listen(2021,()=>console.log("hit server"));