//API's for Authentication
const {User} = require('../models/User');//include model
const bcrypt=require('bcrypt');//include encryption
const salt=14;
const{validationResult}=require('express-validator')

// const passport=require('passport-local');
const passport=require('passport');

//HTTP GET - to load the signup form
exports.auth_signup_get = (req,res)=>{
    res.render('Auth/signup');
}

//HTTP Post - Signup - to post the data
exports.auth_signup_post = (req,res)=>{
    let user= new User(req.body);
    let hash=bcrypt.hashSync(req.body.password, salt);
    user.password=hash;
    //save User
    user.save()
    .then(()=>{
        res.redirect('/Auth/login')
    })
    .catch((err)=>{
        if(err.code==11000){
            req.flash('error','Email already exists');
            res.redirect('/Auth/login')
        } else{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                // res.status(400).json({errors:errors.array()});
                req.flash('validationErrors', errors.errors);
            }
            res.redirect('/Auth/signup');
        }
    })
}

// HTTP GET -signin - to load the singin form
exports.auth_signin_get = (req,res)=>{
    res.render('Auth/login')
}

//HTTP POST - Signin to post the data
exports.auth_signin_post = passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect:'/Auth/login',
    failureFlash:'invalid username or password',
    successFlash: 'you have logged in successfully'
})

//HTTP GET - Logout - to logout the user
exports.auth_logout_get = (req,res)=>{
    //will clear the session
    req.logout();//invalidates session
    req.flash('success','Your account has been logged out');
    res.redirect('/');//redirects to login Page
}