var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "My home page" });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "projectsss" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Servicess" });
});

/* GET home page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "contact me pagee" });
});

module.exports = router;
