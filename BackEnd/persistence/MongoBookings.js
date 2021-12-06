const Mongo = () => {


    const mongoose = require('mongoose');

    const { Schema, model } = mongoose;

    const bookingSchema = new Schema({
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
            type: Number,
            required: true
        },
        child: {
            type: Number,
            required: true
        },
        concession: {
            type: Number,
            required: true
        }

    })

    return (<></>);
}

export default Mongo;