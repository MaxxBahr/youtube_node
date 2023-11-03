const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

const people = [
  {
    name: "Caleb",
    industry: "Music",
  },
  {
    name: "John",
    industry: "networking",
  },
  {
    name: "Sal",
    industry: "Sports medicine",
  },
];

app.get("/", (req, res) => {
  res.send("welcome on the homepage");
});

app.get("/api/customers", (req, res) => {
  res.send({ data: people });
});

app.post("/api/customers", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.post("/", (req, res) => {
  res.send({ data: people });
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.juwqoso.mongodb.net/?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log("App listening on Port: " + PORT);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
