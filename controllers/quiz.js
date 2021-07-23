const ErrorResponse = require("../utils/errorResponse");

exports.quiz = async (req, res, next) => {
    res.send("Quiz");
};

exports.quizzes = async (req, res, next) => {
    res.send("Quizzes");
};
