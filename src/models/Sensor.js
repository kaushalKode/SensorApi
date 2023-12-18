const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
    temp : {
        type : String,
    },
    humidity : {
        type : String,
    },
    inputTime: {
        type: Date,
        default: Date.now,
    },
})




const Sensor = mongoose.model("SensorData",SensorSchema)
module.exports = Sensor;