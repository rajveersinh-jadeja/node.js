import  bikes  from "../models/bikes.js";

const home = (req, res) => {
  res.render("index", { bikes });
};

const discover = (req, res) => {
  res.render("discover", { bikes });
};

const testDrive = (req, res) => {
  res.render("test-drive", { bikes });
};

const customize = (req, res) => {
  res.render("customize", { bikes });
};

export { home, discover, testDrive, customize };