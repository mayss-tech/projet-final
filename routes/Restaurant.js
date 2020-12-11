const express=require('express');
const {restaurantList,restaurantFind, restaurantDetails, rating} =require('../controllers/restaurants.controller.js');
const Router=express.Router()

Router.post('/restaurantList', restaurantList);
Router.get('/restaurantList', restaurantFind);
Router.post('/restaurantDetails',restaurantDetails);
Router.post('/rate', rating);

module.exports = Router;