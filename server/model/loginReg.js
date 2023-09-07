
const mongoose = require('mongoose');

const loginuser = new mongoose.Schema({
    Fname: String,
    Fid:{
     type:String,
     required:true
    },
    password:{
     type:String,
     required:true
    },
    confirmpassword:{
     type:String,
     required:true
    }
 })
 
 const collection = mongoose.model('registerData', loginuser);
 module.exports=collection