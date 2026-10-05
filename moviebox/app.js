const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/movieDB')

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', movieRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
