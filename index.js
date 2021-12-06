const express = require("express");

const app = express(); app.listen(80, function () {
    console.log("listening on 80");
}); app.get("/", (req, res) => {
    res.send("Ankur Patel -- API V4");
}); app.get("/delete", (req, res) => {
    res.send("Delete User");
}); app.get("/update", (req, res) => {
    res.send("Update User");
}); app.get("/insert", (req, res) => {
    res.send("Insert User");
});