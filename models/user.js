const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  
  polls: [{
    type: mongoose.SchemaTypes.ObjectId, ref: "Polls"
  }]
});


const Model =  mongoose.model("User", userSchema);

module.exports = Model;
