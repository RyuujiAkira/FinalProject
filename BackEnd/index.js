const express = require('express');

const bookings = require('./routes/bookings.js');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://root2:root@cluster0.majcr.mongodb.net/test', {useNewUrlParser : true}, (error) => {
    if(error) {
        console.log(`Error, cant connect to database: ${error}`);
    } else {
        console.log("No error!");
    }
});

app.use('/bookings', bookings);

const server = app.listen(6969, () => {
    console.log("Listening on port 6969");
});