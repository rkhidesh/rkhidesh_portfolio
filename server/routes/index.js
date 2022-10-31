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

/* GET Login page. */
router.get("/login", indexController.displayLoginPage);

/* Process Login page. */
router.post("/login", indexController.processLoginPage);

/* GET register page. */
router.get("/register", indexController.displayRegisterPage);

/* Process register page. */
router.post("/register", indexController.processRegisterpage);

/*Perform logout*/
router.get("/logout", indexController.performLogout);

module.exports = router;
