const userModel=require('../model/userModel');

const express = require("express");
const router = express.Router();

router.post("/login",(req,res)=>{
    const { email, password } = req.body;
    console.log("hit login",email,password)
})

module.exports = router;