const express = require("express");

const Book = require("../models/bookModel");

const router = express.Router();


//Get entire Records

router.get("/", async(req, res)=>{
  try{
    const bookData = await Book.find().sort({createdAt: -1});
    res.status(200).json(bookData);
  }catch(err){
    res.status(400).json({error:err.message})
  }
})

module.exports = router;
