const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const USER = {
    username: "admin",
    password: "password",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy((username, password, done) => {
        if (username === USER.username && password === USER.password) {
            return done(null, { username: USER.username });
        }

        return done(null, false);
    })
);

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    done(null, { username });
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.get("/login", (req, res) => {
    res.render("login");
});

app.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    })
);

app.get("/", isAuthenticated, (req, res) => {
    res.render("index");
});

app.post("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);

        res.redirect("/login");
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});