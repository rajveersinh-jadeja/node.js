const express = require('express');
const movies = require('../controllers/moviecontrollers.js');
const router = express.Router();




router.get('/', movies.home);

module.exports = router;
