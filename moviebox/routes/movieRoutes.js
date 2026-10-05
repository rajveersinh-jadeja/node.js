const express = require('express');
const router = express.Router();
const movie = require('../controllers/movieController');

router.get('/', movie.home);
router.get('/list', movie.list);
router.get('/search', movie.search);

router.get('/movies/add', movie.add);
router.post('/movies/add', movie.create);

router.get('/movies/:id', movie.details);

router.get('/movies/edit/:id', movie.edit);
router.post('/movies/edit/:id', movie.update);

router.post('/movies/delete/:id', movie.remove);

module.exports = router;