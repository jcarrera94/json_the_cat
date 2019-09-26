const { breedFetcher } = require('./breedFetcher');

let userInput = process.argv.slice(2)[0];

breedFetcher(userInput, (err, body) => {
  if (err) {
    return console.log('Error', err);
  } else {
    return console.log(body);
  }
});

