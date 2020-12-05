const express=require('express');
const {restaurantList,restaurantFind, restaurantDetails} =require('../controllers/restaurants.controller.js');

const Router=express.Router()

Router.post('/restaurantList', restaurantList);
Router.get('/restaurantList', restaurantFind);
Router.post('/restaurantDetails',restaurantDetails);

module.exports = Router;