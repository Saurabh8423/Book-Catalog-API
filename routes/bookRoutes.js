const express = require("express");

const Book = require("../models/bookModel");

const router = express.Router();

// Require Controllers
const { getBooks, getBook } = require("../controllers/bookController");

//Get entire Records
router.get("/", getBooks)

//Get single Records
router.get("/:id", getBook)

module.exports = router;
