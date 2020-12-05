const mongoose=require('mongoose');

const menuSchema=mongoose.Schema({
    img: String,
    menuName: String,
    menuDesc:String,
    price: Number,
    qtn:Number
});
module.exports = Menu = mongoose.model('Menu',menuSchema)