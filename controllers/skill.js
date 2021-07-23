const ErrorResponse = require("../utils/errorResponse");

exports.skill = async (req, res, next) => {
    res.send("Blog");
};

exports.skills = async (req, res, next) => {
    res.send("Blogs");
};
