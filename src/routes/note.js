const { Router } = require('express');
const router = Router();
const { getNote, createNote, getNotes, deleteNote, updateNote } = require('../controllers/note.controller')

router.route('/').get(getNotes)
    .post(createNote);

//router.route('/crear').get(createNote)
router.route('/:id')
    .delete(deleteNote)
    .put(updateNote)
    .get(getNote);
module.exports = router;