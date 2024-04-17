const ContactModel = require('../models/ContactModel');

exports.createContact = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, gender } = req.body;
        const existingContact = await ContactModel.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const newContact = new ContactModel({
            fullName,
            email,
            phoneNumber,
            gender
        });
        await newContact.save();

        res.status(201).json({ message: 'Contact created successfully', contact: newContact });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



