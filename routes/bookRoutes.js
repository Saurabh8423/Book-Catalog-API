const express = require("express");

const Book = require("../models/bookModel");

const router = express.Router();

// Require Controllers
const {getBooks}= require("../controllers/bookController");

//Get entire Records

router.get("/",getBooks )

module.exports = router;
