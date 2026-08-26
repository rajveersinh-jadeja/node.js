import express from "express";
import bikeRoutes from "./routes/ducatiroutes.js";

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");


app.use("/", bikeRoutes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});