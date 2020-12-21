const Restaurant = require ('../model/restaurant.js');
const User = require('../Model/User');
const Menu = require ('../model/menu.js');

exports.restaurantList = async (req, res) => {
    const {idUser,image,name,openDay,
        firstOpenDay,
        lastOpenDay,
        openHour,
        closeHour,
        closeDay,
        firstCloseDay,
        lastCloseDay,rate,menu}=req.body
    
    try {
        const newRestaurant = await new Restaurant({
            image,name,openDay,
            closeDay,rate,menu
        })
        newRestaurant.save();

        const user = await User.findById(idUser);
        user.idRestaurant.push(newRestaurant._id)
        await User.findByIdAndUpdate(idUser,{
            idRestaurant:user.idRestaurant
        })
        
        const frestaurant = await Restaurant.findById(newRestaurant._id);

        frestaurant.openDay.push({
          firstOpenDay,
          lastOpenDay,
          openHour,
          closeHour,
        });
        await Restaurant.findByIdAndUpdate(newRestaurant._id, {
          openDay: frestaurant.openDay,
        });
        
        frestaurant.closeDay.push({ firstCloseDay, lastCloseDay });
        await Restaurant.findByIdAndUpdate(newRestaurant._id, {
          closeDay: frestaurant.closeDay,
        });


        res.json(frestaurant);
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    }
}
exports.restaurantFind = async (req,res)=>{
    try {
        const restaurant = await Restaurant.find()
        const timeDetails1 = await Restaurant.find(restaurant.openDay)
        const timeDetails2 = await Restaurant.find( restaurant.closeDay)
        const payload={
            restaurant:restaurant,
            timeDetails1:timeDetails1,
            timeDetails2:timeDetails2
        }
        res.status(200).json(restaurant)
        console.log(payload)
    } catch (error) {
        console.error(error)
    res.status(500).json({errors:error})
    }
}
exports.restaurantDetails = async (req,res) => {
    const {id}=req.body 
    try {
        const restaurant = await Restaurant.findById(id);
        const menuDetails =await Menu.find({_id: restaurant.menu})
      
        const payload={
            image:restaurant.image,
            name:restaurant.name,
            menuDetails:menuDetails,
        }
    res.status(200).json(payload);
   
    } catch (error) {
    console.error(error)
    res.json({errors:error})
    }};

    exports.rating= async(req,res)=>{
        const {id,ratingValue}=req.body
       
        try {
            const restaurant = await Restaurant.findById(id)
            restaurant.rate.push(ratingValue)
            // if (restaurant.rate.length ===0 ) return res.json({nameResto:restaurant.name,
            //     avgRate: 0});
            // const sum = restaurant.rate.reduce((a,b)=>a+b)
            // const avg = (sum/restaurant.rate.length)
            await Restaurant.findByIdAndUpdate(id,{
            rate:restaurant.rate} )
            const payload={
                nameResto:restaurant.name,
                // avgRate: avg
            }
            res.json(payload)
            console.log(payload)
    } catch (error) {
        console.error(error)
        res.json({errors:error})
    }
    }



