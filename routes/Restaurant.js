const express=require('express');
const {restaurantList,restaurantFind} =require('../controllers/restaurants.controller.js');

const Router=express.Router()

Router.post('/restaurantList', restaurantList);
Router.get('/restaurantList', restaurantFind);


module.exports = Router;