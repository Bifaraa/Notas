const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
});

userSchema.methods.confirmPassword = function(password) {
    console.log('entre')
    return password === this.password ? true: false;
}

module.exports  = model('User', userSchema);