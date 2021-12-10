const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const Discussion = new Schema({
  movie_id: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
