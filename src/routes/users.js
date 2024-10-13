const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/profile', usersController.getUserProfilePage);

router.get('/', usersController.getUsersPage);

router.post('/', usersController.addUser);

router.delete('/', usersController.deleteUser);

exports.usersRoutes = router;