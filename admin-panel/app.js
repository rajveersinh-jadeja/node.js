require('dotenv').config({ quiet: true });

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
require('./config/passport');

const app = express();

mongoose.connect(process.env.MONGO_URI)

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.messages = req.flash();
    next();
});

app.use('/', authRoutes);
app.use('/', studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});