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

// Export to other files
module.exports = router;