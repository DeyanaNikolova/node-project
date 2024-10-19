const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

router.get('/profile', usersController.getUserProfilePage);

router.post('/', usersController.addUser);

router.delete('/', usersController.deleteUser);

router.get('/', usersController.getUsersPage);

exports.usersRoutes = router;