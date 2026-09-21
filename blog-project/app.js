const express = require('express');
const mongoose = require('mongoose');
const {listen} = require("express/lib/application");

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the app');
})
app/listen(3000, () => {
    console.log('App listening at http://localhost:3000');
})