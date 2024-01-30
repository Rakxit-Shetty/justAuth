
const express=require('express');
const cors = require("cors");
const app=express();

// Body parser
app.use(express.json({ limit: "10kb" }));
//cors
app.use(cors());

app.use("/api/auth", require("./routes/auth"));


app.use("/user",(req,res)=>{
    return res.status(200).send({"name":"Rakshith"})
});

// app.post("/login",(req,res)=>{

// console.log("hello",req.body);

// })

module.exports = app;
