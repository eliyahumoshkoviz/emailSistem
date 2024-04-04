const mongoose = require("mongoose");

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

  chats: [
    {
      
      chat: {
        type: mongoose.Schema.ObjectId,
        ref: "chat",
      },

      isSent: Boolean,
      isRecieved: Boolean,
      isFavorite: Boolean,
      isDeleted: Boolean,
      isDraft: Boolean,
      isRead: { type: Boolean, default: false },
      labels: [String]

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
const userModel =  mongoose.model("user", userSchema);

module.exports = userModel;

