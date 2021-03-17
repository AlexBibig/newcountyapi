require('dotenv').config({
  silent: process.env.NODE_ENV === 'production',
});

const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('./middleware/cors.middleware');

// const bodyParser = require('body-parser');
// const cors = require('cors');
// app.use(cors());
// app.use(bodyParser.json());

const app = express();
app.use(corsMiddleware);
app.use(express.json());

// ROUTERS

const authRoute = require('./routes/auth.route');
app.use('/auth', authRoute);

const countriesRoute = require('./routes/countries.js');
app.use('/countries', countriesRoute);

const countriesEsRoute = require('./routes/countriesEs.js');
app.use('/countries_es', countriesEsRoute);

const countriesRusRoute = require('./routes/countriesRus.js');
app.use('/countries_ru', countriesRusRoute);

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
