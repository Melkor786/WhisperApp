const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { types: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamp: true,
  }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
