// Dependencies
const express = require("express");

// Initialze Router
const router = express.Router();

// Require Controller
const portfolioCtrl = require("../controllers/portfolio")

// Routes
router.get("/portfolio", portfolioCtrl.portfolio_index_get);
router.get('/portfolio/add', portfolioCtrl.portfolio_add_get)

// Export to other files
module.exports = router;