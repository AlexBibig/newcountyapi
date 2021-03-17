const express = require('express');
const { set } = require('mongoose');

const router = express.Router();
// const CountryModel = require('../models/Country');
// const Country = CountryModel.ru;
const Country = require('../models/CountryRus');

// GET ALL

router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMIT

router.post('/', async (req, res) => {
  const country = new Country({
    alpha2Code: req.body.alpha2Code,
    alpha3Code: req.body.alpha3Code,
    name: req.body.name,
    capital: req.body.capital,
    region: req.body.region,
    population: req.body.population,
    mainImage: req.body.mainImage,
    mainVideo: req.body.mainVideo,
    shortDescription: req.body.shortDescription,
    attractions: req.body.attractions,
    geo: req.body.geo,
    capitalMarker: req.body.capitalMarker,
    timezone: req.body.timezone,
    currency: req.body.currency,
    currencyCode: req.body.currencyCode,
  });

  try {
    const savedCountry = await country.save();
    res.json(savedCountry);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET SPICIGIC

router.get('/:countryId', async (req, res) => {
  try {
    const country = await Country.findById(req.params.countryId);
    res.json(country);
  } catch (error) {
    res.json({ message: error });
  }
});

// DELETE

router.delete('/:id', async (req, res) => {
  try {
    const deletedCountry = await Country.remove({
      _id: req.params.id,
    });
    res.json(deletedCountry);
  } catch (error) {
    res.json({ message: error });
  }
});

// EDIT

router.patch('/:id', async (req, res) => {
  try {
    const updatedCountry = await Country.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          alpha2Code: req.body.alpha2Code,
          alpha3Code: req.body.alpha3Code,
          name: req.body.name,
          capital: req.body.capital,
          region: req.body.region,
          population: req.body.population,
          mainImage: req.body.mainImage,
          mainVideo: req.body.mainVideo,
          shortDescription: req.body.shortDescription,
          attractions: req.body.attractions,
          geo: req.body.geo,
          capitalMarker: req.body.capitalMarker,
          timezone: req.body.timezone,
          currency: req.body.currency,
          currencyCode: req.body.currencyCode,
        },
      },
    );
    res.json(updatedCountry);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
