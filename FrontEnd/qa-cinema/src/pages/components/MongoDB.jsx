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

    })

    return (<></>);
}

export default Mongo;