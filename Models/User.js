const mongoose = require('mongoose');
const crypto = require('crypto');
const  uuidv4 = require('uuid');


var UserSchema = new mongoose.Schema({
    fname:{type:String, required:true,maxlength:32,trim:true},
    lname:{type:String,maxlength:32,trim:true},
    email:{type:String,required:true,trim:true,unique:true}, // come back here
    userinfo:{type:String,trim:true},
    encry_password:{type:String,required:true},
    salt:{type:String,},
    role:{type:Number,default:0},
    purchases:{type:Array,default: []}
    
},{timestamps:true});

UserSchema.virtual("password")
    .set(function(password) {
        this._password=password;
        this.salt=uuidv4();
        this.encry_password=this.securePassword();
    })
    .get(function(){
        return this._password
    })


UserSchema.method={
    
    authenticate: function(plainPassword){
        return this.securePassword(plainPassword)===this.encry_password
    },
    
    
    securePassword: function(plainPassword){
        if(!password){return"";}
        try{
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');
            console.log(hash);
        }
          catch(err){return"";}  
        
    }
}


module.exports=mongoose.model("User",UserSchema)