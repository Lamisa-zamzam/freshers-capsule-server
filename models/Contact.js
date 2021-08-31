const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name."],
    },
    email: {
        type: String,
        required: [true, "Please provide a email."],
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: [true, "Please provide a message."],
    },
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
