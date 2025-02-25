const express = require("express")
const nodemon = require("nodemon");

const app = express()
let renderCars = require("../routes/cars.route")
app.use(express.json());


app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use("/",renderCars)

module.exports = app