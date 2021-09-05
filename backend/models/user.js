const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');




const userSchema = mongoose.Schema({
  email: { type: String, 
           required: 'Une adresse Email est requise', 
           unique: true,},
           
  password: { type: String, required: true },

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

