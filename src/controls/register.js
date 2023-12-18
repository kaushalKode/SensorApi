const express = require("express")
const Register = require("../models/Register")
router = new express.Router()


router.get("/",(req,res) => {
    res.render("register");
})

router.get("/register",(req,res) => {
    res.render("register");
})




router.post("/register", async (req,res) => {

    try {
        pass = req.body.password;
        cpass = req.body.cpassword;

        if(pass != cpass){
            res.send("password don't match")
        }
        const user = new Register(req.body)

        //generate token
        const token = await user.generateAuthToken();
        console.log(token);

        // cookies
        res.cookie("jwt",token,{
            
            httpOnly:true,
        });



        // password hash


        // console.log(user)
        await user.save()

        res.render('login')

        
} catch (e) {
   res.status(201).send(e)
   console.log("error part : "+e);
}
})

module.exports = router;






// console.log("before token part : "+user);
// const token = await user.generateAuthToken();
// console.log("after token part : "+token);