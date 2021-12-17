const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const DiscussionSchema = new Schema({
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
  rating: {
    type: Number,
  },
});

const Discussion = model("Discussion", DiscussionSchema);

module.exports = { Discussion: Discussion };
