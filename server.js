// Load the Router
const router = require("./routes/api");

// Load in node modules

require('dotenv').config({ verbose: true });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// create an express application
const app = express();

// Connect to mongo
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

mongoose.connection.once('open', (err) => {
  if (err) {
    console.log("Error connecting to database:" .err);
  } else {
    console.log("Successfully connected to db");
  }});

// Configure express middleware
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set the static folder
app.use(express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/api", router);

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT || 3000, function() {
   console.log("Server is running");
 });
