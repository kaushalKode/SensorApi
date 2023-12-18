const express = require("express")
const Sensor = require("../models/Sensor");

router = new express.Router()

router.post('/setField', async(req,res) => {
    try {

        const temp = req.body.temp;
        const humidity = req.body.humidity;

        const sensor = new Sensor(req.body)

        console.log(req.body);

        try {
            await sensor.save()
            res.status(200).send("pushed successfully");
        } catch (error) {
            console.log(error);
            res.status(400).send("push failed");
        }

        
    } catch (error) {
        res.status(400).send("push failed");   
    }
})

module.exports = router;