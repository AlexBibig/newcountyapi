require('dotenv').config({
  silent: process.env.NODE_ENV === 'production',
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTERS

const countriesRoute = require('./routes/countries.js');
app.use('/countries', countriesRoute);

const countriesRusRoute = require('./routes/countriesRus.js');
app.use('/countries_ru', countriesRusRoute);

const countriesEsRoute = require('./routes/countriesEs.js');
app.use('/countries_es', countriesEsRoute);

app.get('/', (req, res) => {
  res.send('Home page');
});

// CONNECTION

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo');
  },
);

let port = process.env.PORT || 3000;

app.listen(port);
