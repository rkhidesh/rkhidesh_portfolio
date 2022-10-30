let express = require("express");
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", { title: "Home" });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("about", { title: "About" });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("projects", { title: "Projects" });
};

module.exports.displaySkillsPage = (req, res, next) => {
  res.render("skills", { title: "Skills" });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contact", { title: "Contact" });
};
