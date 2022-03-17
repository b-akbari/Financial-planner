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

//expense
exports.portfolio_add_expense_get=(req,res)=>{
    res.render('portfolio/add/expense')
}
exports.portfolio_add_expense_post=async(req,res)=>{
    let user=await User.findById(req.user.id)
     user.portfolio.expense.push(req.body);
     user.save();
     res.redirect('/portfolio');
}


//HTTP DELETE - item
exports.portfolio_delete_get= async(req,res)=>{
    let user = await User.findById(req.user.id)
    user.portfolio.revenue=user.portfolio.revenue.filter(revenue=> revenue.id!=req.params.id);
    user.save();
    res.redirect('/portfolio')

    //     User.updateOne({_id:req.user._id},{ $pull:{ProductInCart:
    //         {_id:req.params.id}}},function(err,deleted){
    //               if (err) {
    //                console.log(err)
    //               } else {
    //      res.redirect("/portfolio");
    //      }
    //    })  


    // console.log(req.query.id)
    // let user= User.findById(req.user.id)
    // User.findByIdAndDelete(req.query.id)
    // .then((user) => {
    //     // console.log(obj.result.n);
    //     console.log(req.query.id)
    //     console.log(user.portfolio.revenue)
    //     res.redirect("/portfolio")
    // })
    // .catch(err => {
    //     console.log(err);
    // })

    // console.log('req.user.id:',req.user.id)
    // let user= await User.findById(req.user.id)


    // User.findById(req.user.id)
    // .then((user) => {

    //     console.log('initial rev',user.portfolio.revenue)
    //     console.log('user rev-num',user.portfolio.revenue[req.query.num])

    //     console.log('query:',req.query)
    //     const newRev=user.portfolio.revenue.splice(0,1);
    //     // console.log(obj.result.n);
    //     console.log('newrev',newRev)
    //     console.log('user rev',user.portfolio.revenue)
    //     res.redirect("/portfolio")
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    // User.findByIdAndDelete()

    //     console.log(req.user.id)
    // let user= User.findById(req.user.id)
    // User.findById(req.user.id)
    // .then((user) => {
    //     console.log(user)
    //     // console.log(obj.result.n);
    //     console.log(user.portfolio.revenue)
    //     res.redirect("/portfolio")
    // })
    // .catch(err => {
    //     console.log(err);
    // })

}