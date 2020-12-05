const Restaurant = require ('../model/restaurant.js');
const User = require('../Model/User');
const Menu = require ('../model/menu.js');

exports.restaurantList = async (req, res) => {
    const {idUser,image,name,rate,menu}=req.body
    
    try {
        const newRestaurant = await new Restaurant({
            image,name,rate,menu
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
        res.status(201).json(restaurant)
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
    
    // const payload ={
    //     image: restaurant.image,
    //     name: restaurant.name,
    //     desc: restaurant.desc,
    //     rate: restaurant.rate,
    //     details:menuDetails,
    // }
    res.status(200).json(menuDetails);
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

// exports.collectionFind = async (req, res) =>{
//     try {
//     const restaurant = await Restaurant.findOne({ _id: req.params.id}).populate("menus");
//     res.status(201).json(restaurant);
//     } catch (error) {
//     console.error(error)
//     res.status(500).json({errors:error})
//     }}

// exports.rating = async (req,res)=>{
//     const {IdUser,Value}=req.body
//     try {
//         const rate = await Restaurant.findOneAndUpdate({
//             $push:({IdUser,Value})
//         })
//         res.status(201).json(rate)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({errors:error})
//     }
// }

