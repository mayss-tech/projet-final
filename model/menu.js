const mongoose=require('mongoose');

const menuSchema=mongoose.Schema({
    img: String,
    menuName: String,
    desc:String,
    price: Number
});
module.exports = Menu = mongoose.model('Menu',menuSchema)