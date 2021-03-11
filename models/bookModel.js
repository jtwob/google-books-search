const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Image,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = Book = mongoose.model("book", bookSchema);
