const express = require('express');
const session = require("express-session");
const passport = require("passport");
const localstrategy = require("passport-local").strategy;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session);