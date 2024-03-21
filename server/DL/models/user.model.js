const mongoose = require("mongoose");

//This code defines the form of the collection
//in the database and actually creates it
//call this code from another file to create the schma

//Creating legitimacy for the schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },

  fullName: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    select: false,
  },

  avartar: String,

  emails: [
    {
      email: {
        type: mongoose.Schema.ObjectId,
        ref: "email",
      },
      isRead: {
        type: Boolean,
        default: false,
    },
      isSent: Boolean,
      isRecieved: Boolean,
      isFavorite: Boolean,
      isDeleted: Boolean,
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

//Make schema
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
