const express=require('express');
const cors = require("cors");
const app=express();

// Body parser
app.use(express.json({ limit: "10kb" }));

app.use(cors());

app.use("/user",(req,res)=>{
    console.log("hit2021");
    return res.status(200).send({"name":"Rakshith"})
});


app.post("/login",(req,res)=>{

console.log("hello",req.body);

})

app.listen(2021,()=>console.log("hit server"));