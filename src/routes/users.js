const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();
router.get('/', usersController.getUsersPage)

exports.usersRoutes = router;