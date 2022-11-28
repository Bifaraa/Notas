const userControler = {};
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

userControler.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};
userControler.createuser = async (req, res) => {
    const { username, password } = req.body;
    console.log('usuario a crear ', username, password)
    const newUser = new User({ username, password });
    await newUser.save();
    res.json('usuario creado');
};
userControler.updateUser = async (req, res) => {
    const { password, newPassword } = req.body;
    const authorization = req.get('authorization')
    let toke = ''
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        toke = authorization.substring(7)
    }
    const decodeToken = jwt.verify(toke, '123')
    const userName = decodeToken.username
    const id = decodeToken.id
    console.log(userName)
    console.log(id)
    //const userNewPassword = await User.find({id})
    //console.log(userNewPassword, " ", newPassword)

    await User.findByIdAndUpdate(id, {
        username: userName,
        password: newPassword
    })
    res.json('contraseña actualizada')



}
userControler.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('Users Eleminado');
};

module.exports = userControler;