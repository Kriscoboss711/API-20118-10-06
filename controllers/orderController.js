const Order = require('../models/order');

exports.getAllOrders = async(req, res) => {
    try{
        const orders = await Order.find().populate('user').populate('products');
        res.status(200).json(orders);
    }catch(err){
        res.statuse(500).jso({error: err.message});
    }
};

exports.createOrder = async (req, res) => {
    try{
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};