const noteController = {};
const Note = require('../models/Note.js');
const jwt = require('jsonwebtoken');

noteController.getNotes = async (req, res) => {
    const userID = req.params.id;
    const authorization = req.get('authorization')
    console.log("voy a pedir notas",req.get('authorization'))
    let token = ''
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7)
    }
    const decodeToken = jwt.verify(token, '123')
    console.log(decodeToken.id)
    const notas = await Note.find({"owner": decodeToken.id});
    console.log(notas)
    res.json(notas);
} 
noteController.createNote = async (req, res) => {
    const { title, content, date } = req.body;
    //const userID = req.params.id;
    const authorization = req.get('authorization')
    let toke = ''
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        toke = authorization.substring(7)
    }
    const decodeToken = jwt.verify(toke, '123')
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        owner: decodeToken.id
    })
    await newNote.save();
    res.json({message: 'Nota guardada'});
}
noteController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
};
noteController.updateNote = async (req, res) => {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title: title,
        content: content,
    });
    res.json({message : "PUT - Note Routes"});
}

noteController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'DELETE - Note Routes'})
};

module.exports = noteController;