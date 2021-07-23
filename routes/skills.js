const express = require("express");
const router = express.Router();

const { skill, skills } = require("../controllers/skill");

router.route("/").get(skills);

router.route("/skill/:id").get(skill);

module.exports = router;
