const mongoose = require('mongoose');

const Mydata = mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:3
    },
    email:{
        type:String,
        require:true,
        unique:[true,'email is already exist']
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    }
})


const UserDetails = mongoose.model('userinfo',Mydata);

module.exports= UserDetails;