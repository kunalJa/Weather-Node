const yargs = require('yargs');

const weather = require('./weather/weather.js');
const geocode = require('./geocode/geocode.js');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help().alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It is currently ${weatherResults.summary}.\nThe temperature is ${weatherResults.temp}° but it sure feels like ${weatherResults.apparentTemp}°.`);
      }
    })
  }
});

// API KEY: e734106afe6d82e439a47ec6081554b2
// Forecast request: https://api.darksky.net/forecast/[key]/[latitude],[longitude]

// practice url: https://api.darksky.net/forecast/e734106afe6d82e439a47ec6081554b2/29.8296506,-95.6668306
