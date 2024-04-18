// registerController.js

const RegisterModel = require('../models/RegisterModel');

exports.createRegister = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        // Check if the email already exists
        const existingRegister = await RegisterModel.findOne({ email });
        if (existingRegister) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create a new register instance
        const newRegister = new RegisterModel({ email, password, confirmPassword });

        // Save the new register to the database
        await newRegister.save();

        // Send a success response
        res.status(201).json({ message: 'Register created successfully', register: newRegister });
    } catch (error) {
        console.error('Error creating Register:', error);
        res.status(500).json({ message: 'Server error' });
    }
};





//http://localhost:3002/Register

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await RegisterModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        if (password !== user.password) {
            return res.status(400).json({ message: 'Incorrect password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
//http://localhost:3002/Register/login
