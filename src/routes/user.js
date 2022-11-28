const { Router } = require('express');
const router = Router();
const { getUsers, deleteUser, createuser, updateUser} = require('../controllers/users.controller.js')
const { loginPost } = require('../controllers/login.controller.js')

router.route('/')
    .get(getUsers)
    .post(createuser)
    .put(updateUser)

router.route('/sing').post(loginPost)

router.route('/:id')
    .delete(deleteUser);
    
module.exports = router;