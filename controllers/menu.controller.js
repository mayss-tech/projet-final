const Menu = require ('../model/menu.js');

exports.menuList = async (req, res) =>{
    try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu)
    const restaurant = await Restaurant.findOneAndUpdate({ _id: req.params.id }, { menu: menu._id }, { new: true }); 
    res.status(201).json(restaurant);
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

exports.menuFind = async (req,res)=> {
    try {
    const menu = await Menu.find({});
    res.status(201).json(menu);
    } catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
    }};

