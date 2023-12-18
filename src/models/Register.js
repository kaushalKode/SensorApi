const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
    user : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    tokens : [
        { token: {
            type : String,
            required : true,
            }
    }]
})

// we use methods when we work with instances
registerSchema.methods.generateAuthToken = async function(){
    try {
        // creating token
        const tkn = jwt.sign({user:this.user},
             process.env.Secret_key,
             );


        this.tokens = this.tokens.concat({token:tkn})
            // saving token to host
        await this.save();
   
        return tkn;


    } catch (error) {
        console.log("the error : "+error);
    }
}


// converting password into hash
registerSchema.pre("save", async function(next){

    if(this.isModified("password")){
        console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`the current password is ${this.password}`);
    }
    next()
} )

const Register = mongoose.model("Register",registerSchema)
module.exports = Register;