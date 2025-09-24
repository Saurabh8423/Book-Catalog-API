const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },

  author: { 
    type: String, 
    required: true, 
    trim: true 
  },

  genre: { 
    type: String, 
    required: true, 
    trim: true 
  },

  price: { 
    type: Number, 
    required: true 
  },

  inStock: { 
    type: Boolean, 
    default: true 
  }

});

const Book = new mongoose.model("Book", BookSchema);

module.exports = Book;
