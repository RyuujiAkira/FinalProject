const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  movieTitle: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  noOfSeats: {
    type: Number,
    required: true,
  },
  adult: {
    type: Boolean,
    required: true,
  },
  child: {
    type: Boolean,
    required: true,
  },
  concession: {
    type: Number,
    required: true,
  },
});

export default Mongo;
