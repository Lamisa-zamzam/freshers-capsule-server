const mongoose = require("mongoose");

const InterviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."],
    },
    description: {
        type: String,
        required: [true, "Please provide a description."],
    },
    pros: [
        {
            type: String,
        },
    ],
    cons: [
        {
            type: String,
        },
    ],
});

const Interview = mongoose.model("Interview", InterviewSchema);
module.exports = Interview;
