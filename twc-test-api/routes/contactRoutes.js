const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.createContact);
router.delete('/contacts/:email', contactController.deleteContact);

module.exports = router;
