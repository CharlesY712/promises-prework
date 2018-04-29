const testNum = (num) => {
  if (num > 10) {
    return Promise.resolve(`${num} is greater than 10, success!`);
  } else if (num === 10) {
    return Promise.resolve(`${num} is 10, try something else!`);
  } else {
    return Promise.reject(`${num} is less than 10, fail!`);
  }
};

const makeAllCaps = (wordArray) => {
  if (wordArray.every(word => typeof word === 'string')) {
    return Promise.resolve(wordArray.map(word => word.toUpperCase()))
  }
  return Promise.reject(
    'No, the array you passed in contained an element that was not a string!'
  );
}

const sortWords = (wordArray) =>
  Promise.resolve(wordArray.sort());

// What is .then() used for, and what is .catch() used for?
// then() is used for triggering the next step after a successful response. catch() is used for triggering the next step after a failed response.

// What are good use cases for Promises?
// Promises are good for dealing with asyncronous code.

// What other libraries/functions can you find that uses Promises?
// Battery API, fetch API, ServiceWorker API also use promises.