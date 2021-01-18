const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const port = 3000;

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
