const User = require('../models/User.js');
const login = {};
const jwt = require('jsonwebtoken');

login.loginPost = async (req, res) =>{
    const { body } = req;
    const { username, password } = body;
    const user = await User.findOne({ username });
    console.log('estoy ', user )
    const autificacion = user === null ? false: user.confirmPassword(password);
    if(!autificacion){
        console.log('contraseña incorrecta');
        res.status(401).json({
            error:'invalid user or password'
        })
    }else{
        const userForToken = {
            id: user._id,
            username: user.username
        }

        const token = jwt.sign(userForToken, '123')

        res.send({username, password, token})
    } 
    
}

module.exports = login;