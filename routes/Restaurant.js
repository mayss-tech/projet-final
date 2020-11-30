const express=require('express');
const {restaurantList,restaurantFind, collectionFind} =require('../controllers/restaurants.controller.js');

const Router=express.Router()

Router.post('/restaurantList', restaurantList);
Router.get('/restaurantList', restaurantFind);
Router.get('/restaurantList/:id', collectionFind); 
module.exports = Router;