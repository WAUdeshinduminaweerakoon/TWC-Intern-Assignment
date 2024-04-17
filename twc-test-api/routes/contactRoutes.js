const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.createContact);
router.delete('/contacts/:email', contactController.deleteContact);
router.put('/contacts/:email', contactController.updateContact);
router.get('/allContacts', contactController.getAllContact);
module.exports = router;
