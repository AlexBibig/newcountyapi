const mongoose = require('mongoose');

const CountryRuSchema = mongoose.Schema({
  alpha2Code: {
    type: String,
    required: true,
  },
  alpha3Code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  mainVideo: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  attractions: {
    type: Array,
    required: true,
  },
  geo: {
    type: Object,
    required: true,
  },
  capitalMarker: {
    type: Array,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('CountriesRu', CountryRuSchema);
