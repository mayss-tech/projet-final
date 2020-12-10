const Menu = require ('../model/menu.js');
const Restaurant = require ('../model/restaurant.js');
const User = require('../Model/User.js');
exports.menuList = async (req, res) =>{
    const {idUser,img,menuName, menuDesc,price,qtn}=req.body
    try {
        
    const newMenu = await new Menu({
        img,menuName,menuDesc, price,qtn
    })
    newMenu.save();
    console.log(newMenu)
    const fuser = await User.findById(idUser)
    
    const restaurant = await Restaurant.findById(fuser.idRestaurant);
    restaurant.menu.push(newMenu._id)
    await Restaurant.findByIdAndUpdate(fuser.idRestaurant,{
        menu: restaurant.menu
    })
    res.status(201).json(restaurant)
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

exports.menuFind = async (req,res)=> {
    try{
        const menu = await Menu.find()
        res.status(201).json(menu)
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

