const ErrorResponse = require("../utils/errorResponse");

exports.blog = async (req, res, next) => {
    res.send("Blog");
};

exports.blogs = async (req, res, next) => {
    res.send("Blogs");
};
