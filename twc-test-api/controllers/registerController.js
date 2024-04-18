const RegisterModel = require('../models/RegisterModel');

exports.createRegister = async (req, res) => {
    try {
        console.log("Request received:", req.body);
        const { email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            console.log("Password and confirm password do not match");
            return res.status(400).json({ message: 'Password and confirm password do not match' });
        }

        const existingRegister = await RegisterModel.findOne({ email });
        if (existingRegister) {
            console.log("Email already exists:", email);
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newRegister = new RegisterModel({ email, password, confirmPassword });
        await newRegister.save();

        console.log("Registration successful:", newRegister);
        res.status(201).json({ message: 'Register created successfully', register: newRegister });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
            console.log("Duplicate key error:", error);
            return res.status(400).json({ message: 'Email already exists' });
        }
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
