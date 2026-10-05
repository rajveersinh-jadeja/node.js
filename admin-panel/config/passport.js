require('dotenv').config({ quiet: true });

const passport = require('passport');
const localStrategy = require('passport-local');

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

passport.use(new localStrategy(
    { usernameField: 'username', passwordField: 'password' },
    (username, password, done) => {
        if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
            return done(null, false);
        }

        return done(null, { id: 1, username: ADMIN_USERNAME });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser((username, done) => {
    done(null, { id: 1, username: username });
});