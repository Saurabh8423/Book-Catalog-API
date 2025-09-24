const Book = require("../models/bookModel")


// Get All Data
const getBooks = async(req, res)=>{
   try{
      const bookData = await Book.find().sort({createdAt: -1});
      res.status(200).json(bookData);
    }catch(err){
      res.status(400).json({error:err.message})
    }
}

module.exports = {
  getBooks,
}