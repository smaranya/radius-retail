const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require('../services/auth'); 

// Middleware
router.get('/homepage/', auth, userController.homepage); 
router.post('/login/', userController.loginUser);
router.post('/register/', userController.createUser);

module.exports = router;
