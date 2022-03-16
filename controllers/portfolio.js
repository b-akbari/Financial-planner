//Api's for Portfolio module

//include model
const {User} = require('../models/User')
const {Revenue} = require('../models/Revenue')
const {Expense} = require('../models/Expense')


exports.portfolio_index_get= (req,res)=>{
    res.render('portfolio/index')
}

//revenue
exports.portfolio_add_revenue_get=(req,res)=>{
    res.render('portfolio/add/revenue');
}

exports.portfolio_add_revenue_post=(req,res)=>{
    console.log(req.body);
    let revenue= new Revenue(req.body);

    revenue.save()
    .then(()=>{
        req.body.user
    })

}

//expense
exports.portfolio_add_expense_get=(req,res)=>{
    res.render('portfolio/add/revenue')
}
exports.portfolio_add_expense_post=(req,res)=>{
    res.render('portfolio/add/revenue')
}