const express = require("express");
const router = express.Router();

const { addContacts } = require("../controllers/contact");

router.route("/addContacts").post(addContacts);

module.exports = router;
