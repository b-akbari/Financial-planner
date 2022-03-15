//Api's for Portfolio module

//include model


exports.portfolio_index_get= (req,res)=>{
    res.render('portfolio/index')
}

exports.portfolio_add_get=(req,res)=>{
    res.render('portfolio/add')
}

exports.portfolio_add_post=(req,res)=>{
    
}