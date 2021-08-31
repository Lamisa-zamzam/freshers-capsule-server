const ErrorResponse = require("../utils/errorResponse");

const Contact = require("../models/Contact");

const contacts = {};

contacts.addContacts = async (req, res, next) => {
    // Read data from request body
    const { name, email, phone, message } = req.body;

    // Create an instance of the Model Contact
    const contact = await new Contact({
        name,
        email,
        phone,
        message,
    });

    // Save the admin to the Contact collection
    contact.save((err, doc) => {
        if (err) {
            next(new ErrorResponse(err.message));
        } else {
            res.status(200).send({ success: true, data: doc });
        }
    });
};

module.exports = contacts;
