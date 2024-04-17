const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/', registerController.createRegister);
router.post('/login', registerController.login);


module.exports = router;