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

exports.deleteContact = async (req, res) => {
    try {
        const { email } = req.params;
        const deletedContact = await ContactModel.findOneAndDelete({ email });

        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact deleted successfully', contact: deletedContact });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllContact = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error retrieving contacts:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const { email } = req.params;
        const { fullName, phoneNumber, gender } = req.body;

        const updatedContact = await ContactModel.findOneAndUpdate(
            { email },
            { fullName, phoneNumber, gender },
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({ message: 'Contact updated successfully', contact: updatedContact });
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
