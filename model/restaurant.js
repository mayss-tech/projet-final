const mongoose=require('mongoose');


const restaurantSchema=mongoose.Schema({
    image: String,
    name: String,
    desc:String,
    rate:[Number],
    menu:[
        {type: mongoose.Schema.Types.ObjectId,
        ref:"Menu" }
    ]

});
module.exports = Restaurant = mongoose.model('Restaurant',restaurantSchema)