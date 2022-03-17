//Api's for Portfolio module

//include model
const {User} = require('../models/User')




exports.portfolio_index_get= (req,res)=>{

    // console.log(user)
    User.findById(req.user.id)
    .then((user)=> {
        // console.log(user)
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

exports.portfolio_add_revenue_post=async(req,res)=>{
    let user=await User.findById(req.user.id)
    user.portfolio.revenue.push(req.body);
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
    console.log(user);
    let revenueObj=user.portfolio.revenue.filter(revenue=>revenue._id==req.query.id)[0]
    console.log(revenueObj);
    res.render('portfolio/edit/revenue',{revenue:revenueObj})
}

exports.portfolio_revenue_edit_put=async(req,res)=>{
    let user= await User.findById(req.user.id)
    user.portfolio.revenue=user.portfolio.revenue.filter(revenue=>revenue.id!=req.body._id);
    user.portfolio.revenue.push(req.body)
    user.save()
    res.redirect('/portfolio')
}

//expense
exports.portfolio_add_expense_get=(req,res)=>{
    res.render('portfolio/add/expense')
}
exports.portfolio_add_expense_post=async(req,res)=>{
    let user=await User.findById(req.user.id)
     user.portfolio.expense.push(req.body);
     user.save();

    //  res.redirect('/portfolio');
}




//HTTP DELETE - expense obj
exports.portfolio_expense_delete= async(req,res)=>{
    let user = await User.findById(req.user.id)
    user.portfolio.expense=user.portfolio.expense.filter(expense=> expense.id!=req.params.id);
    user.save();
    res.redirect('/portfolio')
}

//put info into obj
// exports.portfolio_revenue_update=async(req,res)=>{
//     let user = await User.findById(req.user.id)
//     user.

// }