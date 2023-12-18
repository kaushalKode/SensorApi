const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/iot_demo_db")
                .then(() => {console.log("mongo connected")})
                .catch((e) => {console.error(e)})