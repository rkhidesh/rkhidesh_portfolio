var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about me page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Projects" });
});

/* GET services page. */
router.get("/skills", function (req, res, next) {
  res.render("index", { title: "Skills" });
});

/* GET home page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact Me" });
});

module.exports = router;
