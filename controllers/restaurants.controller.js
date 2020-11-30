const Restaurant = require ('../model/restaurant.js');

exports.restaurantList = async (req, res) => {
    try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant)
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

exports.restaurantFind = async (req,res) => {
    try {
    const restaurant = await Restaurant.find({});
    res.status(201).json(restaurant);
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

exports.collectionFind = async (req, res) =>{
    try {
    const restaurant = await Restaurant.findOne({ _id: req.params.id }).populate("menus");
    res.status(201).json(restaurant);
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }}