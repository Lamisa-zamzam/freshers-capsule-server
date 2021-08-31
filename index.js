require("dotenv").config({ path: "./.env" });
const express = require("express");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());

// for parsing the req.body
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hwuiv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
            {
                auth: { authSource: "admin" },
                user: process.env.DB_USER,
                pass: process.env.DB_PASS,
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
            }
        );
    } catch (err) {
        console.log(err);
    }
};

connectDB();

mongoose.connection.once("open", () => {
    console.log("MONGODB connected");
});

app.use("/skills", require("./routes/skills"));

app.use("/quizzes", require("./routes/quizzes"));

app.use("/blogs", require("./routes/blogs"));

app.use("/auth", require("./routes/auth"));

app.use("/interviews", require("./routes/interviews"));

app.use("/contacts", require("./routes/contact"));

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
