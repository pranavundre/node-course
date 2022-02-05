const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    default: 0,
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age cannot be negative.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain password");
      }
    },
  },
});

module.exports = User;
