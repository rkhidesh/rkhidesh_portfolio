let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let passport = require("passport");

let contactController = require("../controllers/contact");

function requireAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

router.get("/", contactController.displayContactList);

router.get("/add", requireAuth, contactController.displayAddPage);

router.post("/add", requireAuth, contactController.processAddPage);

router.get("/edit/:id", requireAuth, contactController.displayEditPage);

router.post("/edit/:id", requireAuth, contactController.processEditPage);

router.get("/delete/:id", requireAuth, contactController.performDelete);

module.exports = router;
