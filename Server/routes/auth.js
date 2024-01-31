const userModel=require('../model/userModel');
const auth =require('../middleware/auth')
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { networkInterfaces } = require("os");
const nets = networkInterfaces();

router.post("/login",async (req,res)=>{
    const { email, password } = req.body;
    try{
        let userData=await userModel.findOne({
            email:email
        });

        if (!userData) {
            return res.status(400).json({
              errors: [{ msg: "INVALID EMAIL" }],
            });
          }

          const isMatch = userData.pass==password ? true : false //await bcrypt.compare(password, userDetails.password);
         

          if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ msg: "INVALID PASSWORD" }] });
          }
          console.log("inside23");
          //Create Payload
          const payload = {
            user: {
              id: userData._id,
            }
          };

          jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN }, (err, token) => {            
            if (err)
              throw err;
            else
            res.status(200).json({ token });
          });
    
          let ipAddress = "";
          for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
              if (net.family === "IPv4" && !net.internal) {
                ipAddress = net.address;
              }
            }
          }
          console.log(ipAddress,"see");
          

    } catch(err){
console.log(err)
    }

})

module.exports = router;