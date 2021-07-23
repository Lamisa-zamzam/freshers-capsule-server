const express = require("express");
const router = express.Router();

const { quiz, quizzes } = require("../controllers/quiz");

router.route("/").get(quizzes);

router.route("/quiz/:id").get(quiz);

module.exports = router;
