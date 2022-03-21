//Api's for Portfolio module

//include model
const {User} = require('../models/User')




exports.portfolio_index_get= (req,res)=>{
    User.findById(req.user.id)
    .then((user)=> {
        res.render('portfolio/index',{user})
    })
    .catch((err)=>{
        console.log(err)
    })
}

//revenue
exports.portfolio_add_revenue_get=(req,res)=>{
    User.find()
    res.render('portfolio/add/revenue');
}
//HTTP POST - revenue obj
exports.portfolio_add_revenue_post=async(req,res)=>{
    let user=await User.findById(req.user.id)
    user.portfolio.revenue.push(req.body);
    console.log(req.body)
    user.save();
    res.redirect('/portfolio')
}

//HTTP DELETE - revenue obj
exports.portfolio_revenue_delete= async(req,res)=>{
    let user = await User.findById(req.user.id)
    user.portfolio.revenue=user.portfolio.revenue.filter(revenue=> revenue.id!=req.params.id);
    user.save();
    res.redirect('/portfolio')
}

//HTTP GET - revenue edit form
exports.portfolio_revenue_edit_get=async(req,res)=>{
    let user= await User.findById(req.user.id)
    let revenueObj=user.portfolio.revenue.filter(revenue=>revenue._id==req.query.id)[0]
    res.render('portfolio/edit/revenue',{revenue:revenueObj})
}
//HTTP Put - update revenue item
exports.portfolio_revenue_edit_put=async(req,res)=>{
    let user= await User.findById(req.user.id)
    user.portfolio.revenue=user.portfolio.revenue.filter(revenue=>revenue.id!=req.body._id);
    user.portfolio.revenue.push(req.body)
    user.save()
    res.redirect('/portfolio')
}

//HTTP Get - add expense form
exports.portfolio_add_expense_get=(req,res)=>{
    res.render('portfolio/add/expense')
}

//HTTP Post - create the Expense object
exports.portfolio_add_expense_post=async(req,res)=>{
    let user=await User.findById(req.user.id)
     user.portfolio.expense.push(req.body);
     user.save();
     res.redirect('/portfolio');
}

//HTTP DELETE - expense obj
exports.portfolio_expense_delete= async(req,res)=>{
    let user = await User.findById(req.user.id)
    user.portfolio.expense=user.portfolio.expense.filter(expense=> expense.id!=req.params.id);
    user.save();
    res.redirect('/portfolio')
}

//HTTP GET - Expense edit form
exports.portfolio_expense_edit_get=async(req,res)=>{
    let user= await User.findById(req.user.id)
    let expenseObj=user.portfolio.expense.filter(expense=>expense._id==req.query.id)[0]
    res.render('portfolio/edit/expense',{expense:expenseObj})
}

//HTTP Put - Update expense item
exports.portfolio_expense_edit_put=async(req,res)=>{
    let user = await User.findById(req.user.id)
    user.portfolio.expense=user.portfolio.expense.filter(expense=>expense.id!=req.body._id);
    user.portfolio.expense.push(req.body)
    user.save()
    res.redirect('/portfolio')
}
//HTTP Get - Profile edit form
exports.portfolio_profile_edit_get=async(req,res)=>{
    let user=await User.findById(req.user.id)
    res.render('portfolio/edit/profile',{user})
}

//HTTP Put - Update profile
exports.portfolio_profile_edit_put= async(req,res)=>{
    let user= await User.findByIdAndUpdate(req.user.id);
    user.portfolio.goal=req.body.goal;
    user.portfolio.timeFrame=req.body.timeFrame;
    user.portfolio.wallet=req.body.wallet;
    user.save();
    res.redirect("/portfolio");
}