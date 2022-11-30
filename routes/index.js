let router = require("express").Router();
let users = require("./users");
let cities = require("./cities");
let itineraries = require("./itineraries");
let reactions = require("./reactions");

router.use("/api/itineraries", itineraries);
router.use("/api/auth", users), router.use("/api/cities", cities);
router.use("/api/reactions", reactions);

module.exports = router;
