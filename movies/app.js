const express = require("express");
const movieRoutes = require("./routes/movieroutes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(movieRoutes);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});