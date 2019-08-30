const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comments");
const contact = require("./routes/api/contact");
const app = express();
app.use(bodyParser.json());

// Database Config
const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to database"))
    .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/api", contact);
app.use("/api", comments);
app.use("/api", posts);
app.use(express.static("images"));

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port);