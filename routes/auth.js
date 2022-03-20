// const router = require('express')// .router
const express = require("express");
const router = express.Router();
const {body}=require('express-validator');

//import authentication controller
const authCntrl= require('../controllers/auth')

//Routes for Authentication
router.get("/auth/signup", authCntrl.auth_signup_get);

//express authentication
router.post("/auth/signup", [
    body('firstName').isLength({min:3 ,max:99}).withMessage('first name must be between 3 and 99 characters long'),
    body('lastName').isLength({min:3, max:99}).withMessage('last name must be between 3 and 99 characters long'),
    body('emailAddress').isEmail().withMessage('please enter a valid Email address'),
    body('password').isLength({min:5, max:99}).withMessage('Your password must be between 6 and 99 characters')
], authCntrl.auth_signup_post);

//get sign in form
router.get('/auth/login',authCntrl.auth_signin_get);

//sign in to account
router.post('/auth/login',authCntrl.auth_signin_post);

//log out user
router.get('/auth/logout',authCntrl.auth_logout_get);

module.exports = router;