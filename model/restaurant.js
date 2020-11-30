const mongoose=require('mongoose');
var Schema = mongoose.Schema;

const restaurantSchema=mongoose.Schema({
    image: String,
    name: String,
    desc:String,
    menu:[
        {type: Schema.Types.ObjectId,
        ref:"Menu", }
    ]

});
module.exports = Restaurant = mongoose.model('Restaurant',restaurantSchema)