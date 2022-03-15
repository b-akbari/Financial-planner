// Dependencies
const { accepts } = require("express/lib/request");
const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    title: String,
    monthlyExpense: Number,
    annualPercentChange:Number
})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports={Expense};