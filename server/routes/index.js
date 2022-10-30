let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET about me page. */
router.get("/about", indexController.displayAboutPage);

/* GET projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET services page. */
router.get("/skills", indexController.displaySkillsPage);

/* GET home page. */
router.get("/contact", indexController.displayContactPage);

module.exports = router;
