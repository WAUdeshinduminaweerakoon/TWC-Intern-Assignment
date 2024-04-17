const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
      email: {
            type: String,
            required: true,
            unique: true
      },
      password:{
            type: String,
            required: true,
            unique: true

      },
//     TODO: password hashing
       confirm password:{
            type: String,
            required: true,
            unique: true
       },
})

const RegisterModel = mongoose.model('Register', registerSchema);
model.exports = RegisterModel;