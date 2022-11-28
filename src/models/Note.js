const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    owner: String,
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamp: true
});

module.exports  = model('Note', noteSchema);