import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const getUserById = async function(req, res, next){
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
        next();
    } catch(error){
        next(error);
    }
}

export const getAllUsers = async function(req, res, next){
    try{
        const users = await User.find();
        res.body = {};
        res.body.users = users;
        next();
    }
    catch(error){
        next(error);
    }
}

//expects a body that looks like { user: {name: "...", email: "...", password: "..."} }
export async function addUser(req, res,  next){
    try{
        const data = req.body.user;
        const hashedPass = bcrypt.hash(data.password, 10);
        const user = new User({
            name:data.name,
            email:data.email,
            password:hashedPass
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
        next();
    } catch(error){
        next(error);
    }
}

export async function addUsers(req, res, next){
    try{
        const users = req.body.users;
        const reply = await User.insertMany(users);
        res.json({message:"successfuly added users", users});
        next();
    } catch(error){
        next(error);
    }
}

export async function patchUser(req, res, next){
    try{
        const newUser = req.body.user;
        const user = await User.findById(req.body.user._id);
        if(newUser.name) user.name = newUser.name;
        if(newUser.password) user.password = newUser.password;
        if(newUser.email) user.email = newUser.email;
        const result = await user.save();
        res.json({message:"patch successful", result});
        next();
    } catch(error){
        next(error);
    }
}

export const deleteUserById = async function(req, res, next){
    try{
        const reply = await User.findByIdAndDelete(req.params.id);
        res.json({message:"delete successful", reply});
        next();
    } catch(error){
        next(error);
    }
}

export const validateLogin = async function(req, res, next){
    try{

    } catch (error){
        next(error);
    }
}