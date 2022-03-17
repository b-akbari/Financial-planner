// Dependencies
const express = require("express");

// Initialze Router
const router = express.Router();

// Require Controller
const portfolioCtrl = require("../controllers/portfolio")

// Routes
router.get("/portfolio", portfolioCtrl.portfolio_index_get); //get index

    //revenue
router.get('/portfolio/add/revenue', portfolioCtrl.portfolio_add_revenue_get)//display add revenue form
router.post('/portfolio/add/revenue',portfolioCtrl.portfolio_add_revenue_post)

    //expense
router.get('/portfolio/add/expense', portfolioCtrl.portfolio_add_expense_get)//display add expense form
router.post('/portfolio/add/expense',portfolioCtrl.portfolio_add_expense_post)

    //delete revenue
router.delete('/portfolio/delete/:id', portfolioCtrl.portfolio_revenue_delete) //delete an item from the portfolio

    // //delete expense
    // router.delete('/portfolio/delete/:id', portfolioCtrl.portfolio_delete_get) //delete an item from the portfolio


// Export to other files
module.exports = router;