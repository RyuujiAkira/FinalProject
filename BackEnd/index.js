const express = require('express');

const bookings = require('./routes/bookings.js');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const errorLogger = (error, req, res, next) => {

    console.log(err.stack);
    res.status(500).send(error.message);
}

app.use(errorLogger);

mongoose.connect('mongodb+srv://root2:root@cluster0.majcr.mongodb.net/QACBookings', {useNewUrlParser : true}, (error) => {
    if(error) {
        console.log(`Error, cant connect to database: ${error}`);
    } else {
        console.log("No error!");
    }
});

app.use( bookings);

const server = app.listen(6969, () => {
    console.log("Listening on port 6969");
});