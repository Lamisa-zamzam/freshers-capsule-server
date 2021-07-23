require("dotenv").config({ path: "./.env" });
const express = require("express");
const errorHandler = require("./middleware/error");
const cors = require("cors");

const app = express();

app.use(cors());

// for parsing the req.body
app.use(express.json());

app.use("/skills", require("./routes/skills"));

app.use("/quizzes", require("./routes/quizzes"));

app.use("/blogs", require("./routes/blogs"));

// Error Handle
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Error Handle
app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening`);
});

// Do not log error
process.on("unhandledRejection", (err, promise) => {
    console.log(`logged error: ${err}`);
    server.close(() => process.exit(1));
});
