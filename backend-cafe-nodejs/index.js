const express = require('express');
let cors = require('cors');
const { urlencoded } = require('express');
const app = express();

const connection = require('./connection');

app.use(cors())
app.use(urlencoded({extended: true}));
app.use(express.json());

module.exports = app;