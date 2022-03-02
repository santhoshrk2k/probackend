const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    name:{type: String,trim: true,maxLength:32,required: true},
    description:{type:String,type: Number,trim: true,maxLength:3000},
    price:{type:Number,required: true,maxLength:32,trim:32},
    category:{type:ObjectId,ref:"Category",required:true},
    stock:{type:Number},
    sold:{type:Number,default:0},
    photo:{data:Buffer,contentType:String}

},{timestamps:true})
module.exports = mongoose.model("Product",ProductSchema)