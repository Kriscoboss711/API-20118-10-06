const Product = require('../models/products');

exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err){
    res.status(500).json({message: err.message});
    }
};

exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};