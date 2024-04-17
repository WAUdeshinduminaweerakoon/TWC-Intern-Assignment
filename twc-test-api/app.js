const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use("/contact", contactRoutes);

module.exports = app;

