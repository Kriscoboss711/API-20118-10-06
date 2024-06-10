const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 3000;
const MONGODB_URL = 'mongodb://localhost:27017/';


mongoose.connect(MONGODB_URL)
    .then(() => console.log('Connected succesfully'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/order', orderRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
})