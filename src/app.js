const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./models/customer");
const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

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

const customer = new Customer({
  name: "max",
  industry: "tech",
});

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/api/customers", async (req, res) => {
  try {
    const result = await Customer.find();
    res.send({ data: result });
  } catch (err) {
    console.log(err);
  }
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
    await mongoose.connect(CONNECTION);

    app.listen(PORT, () => {
      console.log("App listening on Port: " + PORT);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
