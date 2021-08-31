const express = require("express");
const router = express.Router();

const { addInterviews, getInterviews, getDetailsById } = require("../controllers/interview");

router.route("/addInterviews").post(addInterviews);

router.route("/getInterviews").get(getInterviews);

router.route("/getInterviewById/:id").get(getDetailsById);

module.exports = router;
