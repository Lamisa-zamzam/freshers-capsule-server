const express = require("express");
const router = express.Router();

const { blog, blogs } = require("../controllers/blog");

router.route("/").get(blogs);

router.route("/blog/:id").get(blog);

module.exports = router;
