var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.render("form", { messageForm: "This is a message form" });
});

module.exports = router;
