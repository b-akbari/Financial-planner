const mongoose = require('mongoose');

const bcrypt=require('bcrypt');

const revenueSchema = mongoose.Schema({
    title: String,
    monthlyInFlow: Number,
    annualPercentChange:Number //annual percent change
})

const expenseSchema = mongoose.Schema({
    title: String,
    monthlyExpense: Number,
    annualPercentChange:Number
})


const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength:[3,'first name must be more than 3 characters'],
        maxlength: [99, "too many characters! chill!"],
    },  
    lastName: {
    type: String,
    required: true,
    minlength:[3,'first name must be more than 3 characters'],
    maxlength: [99, "too many characters! chill!"],
    },
    emailAddress: {
        type: String,
        required: true,
        minlength:[3,'first name must be more than 3 characters'],
        maxlength: [99, "too many characters! chill!"],
        lowercase: true,//converted to lowercase
        unique: true,//if this exists, it will throw an exception
    },
    password: {
        type: String,
        required:true,
        minlength:[6,'your password should be atleast 6 characters']
    },
    portfolio:{
        goal:{type:Number,default:1000},
        timeFrame:{type:Number,default:24},
        wallet:{type:Number, default:0},
        revenue:[revenueSchema],
        expense:[expenseSchema]

    }

},
    {
        timestamps: true // means createdAt and updatedAt
    });

    //Verify Password
    userSchema.methods.verifyPassword=function(password){
        console.log(password);
        console.log(this.password);
        return bcrypt.compareSync(password,this.password)
        //if matched true, if not matched, will return false
    }


const User = mongoose.model('User', userSchema)

module.exports={User};