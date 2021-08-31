const ErrorResponse = require("../utils/errorResponse");

const Interview = require("../models/Interview");

const interviews = {};

interviews.addInterviews = async (req, res, next) => {
    // Read data from request body
    const { title, description, pros, cons } = req.body;

    // Create an instance of the Model Interview
    const interview = await new Interview({
        title,
        description,
        pros,
        cons,
    });

    // Save the interview to the Interview collection
    interview.save((err, doc) => {
        if (err) {
            next(new ErrorResponse(err.message));
        } else {
            res.status(200).send({ success: true, data: doc });
        }
    });
};

interviews.getInterviews = async (req, res, next) => {
    const interviews = await Interview.find({});
    res.status(200).send({ success: true, data: interviews });
};

interviews.getDetailsById = async (req, res, next) => {
    const id = req.params.id;
    const interview = await Interview.find({ _id: id });
    res.status(200).send({ success: true, data: interview });
};

module.exports = interviews;
