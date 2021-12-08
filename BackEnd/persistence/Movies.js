const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const MoviesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
});

const Movies = model("Movies", MoviesSchema);

module.exports = { Movies: Movies };
