const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/express", (req, res) => {
    res.sendFile(__dirname + "/public/topic/express.html");
});

app.get("/appjs", (req, res) => {
    res.sendFile(__dirname + "/public/topic/appjs.html");
});

app.get("/restapi", (req, res) => {
    res.sendFile(__dirname + "/public/topic/restapi.html");
});

app.get("/jsonobj", (req, res) => {
    res.sendFile(__dirname + "/public/topic/jsonobjjs.html")
});



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});
