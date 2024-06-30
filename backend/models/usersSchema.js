const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = {
  UserModel,
};
