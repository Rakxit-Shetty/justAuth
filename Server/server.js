require("dotenv").config();

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception! Shutting down...");
    console.error("Error:", err);
    process.exit(1);
  });

  const app = require("./app");

////////////////// DB conn
  const mongoose =require('mongoose');

  mongoose.connect(process.env.MONGO_URI)
  .then((conn) => console.log(`MongoDB connected: ${conn.connection.host}`));

///////////////// listen on port 

const PORT=process.env.PORT;
app.listen(PORT || 2021,()=>console.log("server started at PORT:",PORT));