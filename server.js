const express=require('express');
const connectDB = require ('./Config/dbConnect');

const user=require('./routes/User');
const restaurant=require('./routes/Restaurant');
const menu=require('./routes/Menu');

const app=express();

app.use(express.json());
app.use('/user', user);
app.use('/dataRestaurant', restaurant);
app.use('/dataMenu', menu)


connectDB();

const PORT= process.env.PORT || 6000;
app.listen(PORT,err=> err ? console.error(error):console.log( `server is running on PORT ${PORT}`));