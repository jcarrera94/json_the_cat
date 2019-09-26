const request = require('request');

const breedFetcher = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, 'Breed does not exist')
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { breedFetcher };
