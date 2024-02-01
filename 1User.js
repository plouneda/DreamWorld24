// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  country: { type: String, required: true },
  idNumber: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
