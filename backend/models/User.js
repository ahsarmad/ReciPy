const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJson", {
  virtuals: true,
});

module.exports = mongoose.model("user", UserSchema);

//!side note about exporting :
/**
 * if you want to export it as an object,
 * you need to add {}, because of es6 object instruction
 * e.g. {User} = require(./models/User)
 */
