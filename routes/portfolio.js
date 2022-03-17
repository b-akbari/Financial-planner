// Dependencies
const express = require("express");

// Initialze Router
const router = express.Router();

// Require Controller
const portfolioCtrl = require("../controllers/portfolio")

const isLoggedIn = require('../helper/isLoggedIn')

// Routes
router.get("/portfolio",isLoggedIn, portfolioCtrl.portfolio_index_get); //get index

//revenue
//display form
router.get('/portfolio/add/revenue',isLoggedIn, portfolioCtrl.portfolio_add_revenue_get)
//post info from form to user's revenue array
router.post('/portfolio/add/revenue',isLoggedIn, portfolioCtrl.portfolio_add_revenue_post) 
//delete revenue
router.delete('/portfolio/delete/revenue/:id',isLoggedIn, portfolioCtrl.portfolio_revenue_delete) //delete an item from the portfolio

//expense
//display expense form
router.get('/portfolio/add/expense',isLoggedIn, portfolioCtrl.portfolio_add_expense_get)
//post expense into user's expense array
router.post('/portfolio/add/expense',isLoggedIn, portfolioCtrl.portfolio_add_expense_post)//post the info
//delete expense
router.delete('/portfolio/delete/expense/:id', isLoggedIn, portfolioCtrl.portfolio_expense_delete) //delete an item from the portfolio

//get edit form for revenue
router.get('/portfolio/edit/revenue/',isLoggedIn, portfolioCtrl.portfolio_revenue_edit_get)

//PUT
router.put('/portfolio/revenue/update',isLoggedIn, portfolioCtrl.portfolio_revenue_edit_put)

// router.put('/portfolio/edit/revenue/:id', portfolioCtrl.portfolio_revenue_update)

// Export to other files
module.exports = router;