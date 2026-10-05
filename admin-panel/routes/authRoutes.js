const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/authMiddleware');

router.get('/login', auth.home);

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/students');
});

router.post('/logout', auth.logout);

module.exports = router;