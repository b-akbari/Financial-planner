const passport=require('passport');

const LocalStrategy= require('passport-local').Strategy;

const {User}=require('../models/User');

//serialize user
//determines which piece of user data will be used in the session
//storing info in session
passport.serializeUser(function(user, done){
    done(null, user.id);
})

//deserialize user
//when there is a requirement of fetching the session
//restoring the info in the session
passport.deserializeUser(function(id, done){
    User.findById(id,function(err,user){
        done(err,user);
    })
})


passport.use(new LocalStrategy(
    {
        usernameField:'emailAddress',
        passwordField:'password'
    },
    function(emailAddress, password, done) {    //done is the callback function if user-password match successfully
      User.findOne({ emailAddress}, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
));


 module.exports=passport;