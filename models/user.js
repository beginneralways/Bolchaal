const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


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
  profilePicture: String, // Store the URL of the uploaded profile picture, (Cloudinary shall be implemented here 
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
