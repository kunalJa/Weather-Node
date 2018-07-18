const request = require('request');

const APIKEY = 'e734106afe6d82e439a47ec6081554b2';

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${APIKEY}/${latitude},${longitude}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temp: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature,
        rainChance: body.currently.precipProbability,
        summary: body.currently.summary
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather,
};
