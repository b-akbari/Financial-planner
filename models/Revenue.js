// Dependencies
const { accepts } = require("express/lib/request");
const mongoose = require("mongoose");

const revenueSchema = mongoose.Schema({
    title: String,
    monthlyInFlow: Number,
    annualPercentChange:Number //annual percent change
})

const Revenue = mongoose.model('Revenue', revenueSchema);

module.exports={Revenue};