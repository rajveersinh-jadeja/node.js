const home = (req, res) => res.render('login');

const logout = (req, res) => {
    req.logout(() => res.redirect('/login'));
};

module.exports = { home, logout };