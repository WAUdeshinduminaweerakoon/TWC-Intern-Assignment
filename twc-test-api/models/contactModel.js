const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    }
});

const ContactModel = mongoose.model('Contact', contactSchema);
module.exports = ContactModel;


//full name
//e-mail
//phone number
//gender