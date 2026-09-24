const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", (req, res) => {

});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res) => {

});

router.get("/blogs", isAuthenticated, (req, res) => {
    res.render("blogs");
});
module.exports = router;
