const Restaurant = require ('../model/restaurant.js');
const User = require('../Model/User');
const Menu = require ('../model/menu.js');

exports.restaurantList = async (req, res) => {
    const {idUser,image,name,desc,rate,menu}=req.body
    
    try {
        const newRestaurant = await new Restaurant({
            image,name,desc,rate,menu
        })
        newRestaurant.save();

        const user = await User.findById(idUser);
        user.idRestaurant.push(newRestaurant._id)
        await User.findByIdAndUpdate(idUser,{
            idRestaurant:user.idRestaurant
        })
        res.json(newRestaurant);
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    }
}
exports.restaurantFind = async (req,res)=>{
    try {
        const restaurant = await Restaurant.find()
        res.status(200).json(restaurant)
    } catch (error) {
        console.error(error)
    res.status(500).json({errors:error})
    }
}
exports.restaurantDetails = async (req,res) => {
    const {id}=req.body 
    console.log(id)
    try {
        const restaurant = await Restaurant.findById(id);
        const menuDetails =await Menu.find({_id: restaurant.menu})
    res.status(200).json(menuDetails);
    } catch (error) {
    console.error(error)
    res.json({errors:error})
    }};

    exports.rating= async(req,res)=>{
        const {id,ratingValue}=req.body
        console.log(id)
        try {
            const restaurant = await Restaurant.findById(id)
            restaurant.rate.push(ratingValue)
            if (restaurant.rate.length ===0 ) return res.json({nameResto:restaurant.name,
                avgRate: 0});
            const sum = restaurant.rate.reduce((a,b)=>a+b)
            const avg = (sum/restaurant.rate.length)
            await Restaurant.findByIdAndUpdate(id,{
            rate:restaurant.rate} )
            const payload={
                nameResto:restaurant.name,
                avgRate: avg
            }
            res.json(payload)
    } catch (error) {
        console.error(error)
        res.json({errors:error})
    }
    }



