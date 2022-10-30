let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { route } = require(".");
const app = require("../config/app");
const book = require("../models/book");

let bookController = require("../controllers/book");
let Book = require("../models/book");

router.get("/", bookController.displayBookList);

router.get("/add", bookController.displayAddPage);

router.post("/add", bookController.processAddPage);

router.get("/edit/:id", bookController.displayEditPage);

router.post("/edit/:id", bookController.processEditPage);

router.get("/delete/:id", bookController.performDelete);

module.exports = router;
