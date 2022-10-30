let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const { route } = require(".");
const app = require("../config/app");
const book = require("../models/book");

let Book = require("../models/book");

router.get("/", (req, res, next) => {
  Book.find((err, booklist) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(BookList);
      res.render("book/list", { title: "Books", BookList: booklist });
    }
  });
});

router.get("/add", (req, res, next) => {
  res.render("book/add", { title: "Add Book" });
});
router.post("/add", (req, res, next) => {
  let newBook = Book({
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });

  Book.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/book-list");
    }
  });
});

router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("book/edit", { title: "Edit Book", book: bookToEdit });
    }
  });
});

router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedBook = Book({
    _id: id,
    name: req.body.name,
    author: req.body.author,
    published: req.body.published,
    description: req.body.description,
    price: req.body.price,
  });

  Book.updateOne({ _id: id }, updatedBook, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/book-list");
    }
  });
});

router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  Book.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/book-list");
    }
  });
});

module.exports = router;
