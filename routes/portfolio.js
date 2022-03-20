// Dependencies
const express = require("express");

// Initialze Router
const router = express.Router();

// Require Controller
const portfolioCtrl = require("../controllers/portfolio")

// require middleware for Authentication
const isLoggedIn = require('../helper/isLoggedIn')

// Routes

    //index (home)
        //get index
        router.get("/portfolio",isLoggedIn, portfolioCtrl.portfolio_index_get); 

    //revenue
        //display form
        router.get('/portfolio/add/revenue',isLoggedIn, portfolioCtrl.portfolio_add_revenue_get)
        //post info from form to user's revenue array
        router.post('/portfolio/add/revenue',isLoggedIn, portfolioCtrl.portfolio_add_revenue_post) 
        //delete revenue
        router.delete('/portfolio/delete/revenue/:id',isLoggedIn, portfolioCtrl.portfolio_revenue_delete) //delete an item from the portfolio
        //get edit form for revenue
        router.get('/portfolio/edit/revenue/',isLoggedIn, portfolioCtrl.portfolio_revenue_edit_get)
        //Update Revenue item
        router.put('/portfolio/revenue/update',isLoggedIn, portfolioCtrl.portfolio_revenue_edit_put)

    //expense
        //display expense form
        router.get('/portfolio/add/expense',isLoggedIn, portfolioCtrl.portfolio_add_expense_get)
        //post expense into user's expense array
        router.post('/portfolio/add/expense',isLoggedIn, portfolioCtrl.portfolio_add_expense_post)//post the info
        //delete expense
        router.delete('/portfolio/delete/expense/:id', isLoggedIn, portfolioCtrl.portfolio_expense_delete) //delete an item from the portfolio
        //get edit form for expense
        router.get('/portfolio/edit/expense/',isLoggedIn, portfolioCtrl.portfolio_expense_edit_get)
        //update expense item
        router.put('/portfolio/expense/update',isLoggedIn, portfolioCtrl.portfolio_expense_edit_put)
    
    //Profile
        //get Profile starting condition edit form
        router.get('/portfolio/edit/profile', isLoggedIn, portfolioCtrl.portfolio_profile_edit_get)
        //update Profile starting condition
        router.put('/portfolio/edit/update',isLoggedIn,portfolioCtrl.portfolio_profile_edit_put)


// Export to other files
module.exports = router;