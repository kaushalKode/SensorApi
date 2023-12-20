require('dotenv').config();  //to setup environment variables
require("./db/conn");

const express = require("express");
const sensorRouter = require("./controls/Sensor_data");


app = express()


// console.log(process.env.Secret_key)
const port =  3000




// Using middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(sensorRouter)


// app.use(cookie_parser())

const HOST = '0.0.0.0'; // Bind to all available network interfaces

app.listen(port, HOST, () => {
  console.log(`Server is running on http://${HOST}:${port}`);
});