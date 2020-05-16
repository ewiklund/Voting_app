const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollsSchema = new Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  options: [{
    name: {
      type: String,
      required: true,
      // unique: true
    },
    votes: {
      type: Number,
      default: 0
    }
  }
],
    CreatedAt: {
      type: Date,
      default: Date.now()
    },
    owner: {
      type: String,
      required: true
    }
});

const Model = mongoose.model("Polls", pollsSchema);

module.exports = Model;
