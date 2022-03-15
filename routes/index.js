// Dependencies
const express = require("express");

// Initialze Router
const router = express.Router();

// Require Controller
const indexCtrl = require("../controllers/index")

// Routes
router.get("/", indexCtrl.index_get);


// Export to other files
module.exports = router;