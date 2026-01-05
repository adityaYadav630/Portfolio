const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// GET route - serve home page
app.get("/", (req, res) => {
  res.render("index.ejs"); // views/index.ejs ko render karega
});

// POST route - form submit
app.post("/contact", (req, res) => {
  console.log(req.body); // form data
  res.render("thank.ejs");
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});