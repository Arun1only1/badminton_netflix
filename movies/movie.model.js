import mongoose from "mongoose";

// model => table

// set rules(schema)
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  language: {
    type: String,
    required: true,
    maxlength: 55,
  },
  genres: {
    type: [String],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    required: true,
  },
});

//create table
export const Movie = mongoose.model("Movie", movieSchema);
