const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("hello world");
})

app.post("/", (req, res) =>{
    res.send("this is a POST request");
})

app.listen(PORT, () => {
    console.log("App listening on Port: "+PORT);
})