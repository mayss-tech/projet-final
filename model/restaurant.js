const mongoose=require('mongoose');


const restaurantSchema=mongoose.Schema({
    image: String,
    name: String,
    openDay :[{
        firstOpenDay:String ,
        lastOpenDay:String,
        openHour:Number,
        closeHour:Number
}],
    closeDay:[{
        firstCloseDay:String,
        lastCloseDay:String
}],
    rate:[Number],
    menu:[
        {type: mongoose.Schema.Types.ObjectId,
        ref:"Menu" }
    ]

});
module.exports = Restaurant = mongoose.model('Restaurant',restaurantSchema)