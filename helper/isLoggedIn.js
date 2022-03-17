//our own middleware to check if user is logged in
module.exports=(req,res,next)=>{
    if(!req.user){  //if the active user is null, redirect to login page
        res.redirect('/Auth/signin')
    } else{
        next();
    }
}