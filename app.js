const express = require("express");
const app = express();

const { sendEmail } = require("./emailCtrl");

const port = 3000;

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.json());

app.post("/contact", sendEmail);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
