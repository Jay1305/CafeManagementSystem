const express = require('express');
let cors = require('cors');
const { urlencoded } = require('express');
const app = express();

const connection = require('./connection');
const userRoute = require('./routes/user')

app.use(cors())
app.use(urlencoded({extended: true}));
app.use(express.json());
app.use("/user",userRoute);

module.exports = app;