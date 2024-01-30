const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,  
    },
    pass:{
        type:String,
       
    },
    age:{
        type:Number,
       
    },
});

//Export the model
module.exports = mongoose.model('user', userSchema);