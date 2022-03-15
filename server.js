//Dependancies
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
require('dotenv').config();
const flash = require('connect-flash');


// Port Config
const PORT = process.env.PORT;

// Initialize Express app
const app = express();

//see views folder for layout
app.use(expressLayouts);

//check public for static files
app.use(express.static( "public" ) );

//require files
let session=require('express-session');
const passport=require('./helper/ppConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret:process.env.secret,
  saveUninitialized:true,
  resave:false,
  cookie:{maxAge:360000}
}))

    //initialized
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//sharing the information with all pages
app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  res.locals.alerts=req.flash();
  next();// next is a part of express
})

//import routes
const indexRoute = require('./routes/index');
const authRoutes = require('./routes/auth');
const portfolioRoutes = require('./routes/portfolio');
const { initialize } = require("./helper/ppConfig");


//mount routes
app.use('/', indexRoute);
app.use('/', authRoutes);
app.use('/', portfolioRoutes);









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
  