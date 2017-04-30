// Axios is an npm module that should help us make our API call
var axios = require('axios');

// Generate base url as a template
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=57120c83f451c4b90b33a30caac8809e&units=imperial'; // variable that cant be altered

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location); // encodes location according to how it should look in url
    // Using Template Strings in ES6 used for contatenating
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;// injecting variables in string

    // Making a promise when getting output from url
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
        throw new Error(res.data.message);
    });
  }
}
