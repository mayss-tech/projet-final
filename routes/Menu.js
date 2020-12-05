const express=require('express');
const {menuList,menuFind} =require('../controllers/menu.controller.js');

const Router=express.Router()

Router.post('/menuList',menuList);
Router.get('/menuList', menuFind);

module.exports = Router;