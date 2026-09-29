const express = require('express');
const session = require("express-session");
const passport = require("passport");
const {static} = require("express");
const localstrategy = require("passport-local").strategy;

const app = express();

app.set("view engine", "ejs");
app.use(static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session);

passport.use(new localstrategy(
    (username,password,done) => {
        if (username === "admin" && password  === "password") {}
    }
))

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/login", (req, res) => {
    res.render("login");
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})