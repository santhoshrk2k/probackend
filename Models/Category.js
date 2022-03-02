const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    name:{type: 'string',trim:true,required:true,maxLength:32,unique:true},

},{timestamps:true})



module.exports=mongoose.model("Category",CategorySchema)