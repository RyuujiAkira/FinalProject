


const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const MongoBookingsSchema = new Schema({
    movieTitle: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    noOfSeats: {
        type: Number,
        required: true
    },
    adult: {
        type: Boolean,
        required: true
    },
    child: {
        type: Boolean,
        required: true
    },
    concession: {
        type: Number,
        required: true
    }

})




const MongoBookings = model('MongoBookings', MongoBookingsSchema);

module.exports = { 'MongoBookings': MongoBookings };
