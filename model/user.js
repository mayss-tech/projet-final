const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    role:{
        type:String,
        default:"user"
    },
    name:{
        type: String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    adress:String,
    codePostal:Number,
    idRestaurant:[{type:mongoose.Schema.Types.ObjectId , ref:'Restaurant'}],
});
module.exports = User = mongoose.model('user',userSchema)