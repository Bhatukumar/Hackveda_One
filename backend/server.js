const express = require("express");
// const mongoose = require("mongoose");
const cors = require('cors');
const db = require("./db");
const doctor = require("./doctorModel");
const findRoute = require("./findDoctor");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello Bhai Ho gya");
});

app.use("/api/find", findRoute);



app.listen(port,() => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
