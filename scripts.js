const axios = require('axios');
const fs = require('fs');

const getDefaults = () => {
  try {
    return fs.readFileSync('defaultData.json');
  } catch (e) {
    return undefined;
  }
};

const getWeatherPromise = (address) => {
  const encodedAddress = encodeURIComponent(address);
  const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address');
    }

    const latitude = response.data.results[0].geometry.location.lat;
    const longitude = response.data.results[0].geometry.location.lng;
    const weatherURL = `https://api.darksky.net/forecast/e734106afe6d82e439a47ec6081554b2/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
  }).then((response) => {
    console.log(`It is currently ${response.data.currently.summary.toLowerCase()}.\nThe temperature is ${response.data.currently.temperature}° but it sure feels like ${response.data.currently.apparentTemperature}°.`);
  }).catch((e) => {
    if (e.code == 'ENOTFOUND') {
      console.log('Unable to connect to API servers');
    } else {
      console.log(e.message);
    }
  });
}

module.exports = {
  getWeatherPromise,
  getDefaults
};
