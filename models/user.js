const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: String,
  password: {
    type: String,
    required: true,
  },
  profilePicture: String, // Store the URL of the uploaded profile picture
});

module.exports = mongoose.model('User', userSchema);
