//Dependancies
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
require('dotenv').config();

// Port Config
const PORT = process.env.PORT;

// Initialize Express app
const app = express();

//
app.use(expressLayouts);

//import routes

//mount routes

//look into views folder for EJS files
app.set("view engine", "ejs");

// Connection with mongoDB
mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
      console.log("mongodb connected successfully!");
  });
  
  app.listen(PORT, () => console.log(`App is running on ${PORT}`));
  