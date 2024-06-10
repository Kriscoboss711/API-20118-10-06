const User = require('../models/user');

exports.getAllUsers = async(req, res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

exports.createUser = async (req,res) =>{
    try{
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(400).json({error: err.message});
    }
};