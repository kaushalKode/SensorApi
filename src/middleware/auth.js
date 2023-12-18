const jwt = require("jsonwebtoken");

//collection
const Register = require("../models/Register")


// middleware
const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,process.env.Secret_key);
        console.log(verifyUser);

        const user = await Register.findOne({user:verifyUser.user});
        // console.log(user);

        req.token = token;
        req.user = user;

        next();

    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = auth;