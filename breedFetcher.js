const request = require('request');

let userInput = process.argv.slice(2);

const breedFetcher = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log('Breed does not exist');
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

breedFetcher(userInput[0], (err, body) => {
  if (err) {
    return console.log('Error', err);
  } else {
    return console.log(body);
  }
});