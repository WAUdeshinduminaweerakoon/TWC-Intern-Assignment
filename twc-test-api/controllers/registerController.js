const RegisterModel = require('../models/RegisterModel');

exports.createRegister = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Password and confirm password do not match' });
        }

        const existingRegister = await RegisterModel.findOne({ email });
        if (existingRegister) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newRegister = new RegisterModel({
            email,
            password,
            confirmPassword,
        });
        await newRegister.save();

        res.status(201).json({ message: 'Register created successfully', register: newRegister });
    } catch (error) {
        console.error('Error creating Register:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
