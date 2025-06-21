const express = require('express');
const { registerUser, authUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser); // Rota para criar um novo usuário (admin, por exemplo)
router.post('/login', authUser);       // Rota para fazer login

module.exports = router;