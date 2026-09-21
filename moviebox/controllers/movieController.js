const Movie = require('../models/Movie');

const home = async (req, res) => {
    const movies = await Movie.find();
    res.render('index', { movies });
};

const search = async (req, res) => {
   const search = req.query.search || '';
    if (!search) {
        return res.render('search', { movies: [], search });
    }
    const movies = await Movie.find({
        $text: { $search: search }
    });
    res.render('search', { movies, search });
};

const add = (req, res) => {
    res.render('add');
};
const list = async (req, res) => {
    const movies = await Movie.find();
    res.render('list', { movies });
}

const create = async (req, res) => {
    await Movie.create(req.body);
    res.redirect('/');
};

const details = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render('details', { movie });
};

const edit = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render('edit', { movie });
};

const update = async (req, res) => {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/movies/${req.params.id}`);
};

const remove = async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

module.exports = {
    home,
    list,
    search,
    add,
    create,
    details,
    edit,
    update,
    remove
};