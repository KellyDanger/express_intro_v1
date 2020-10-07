const { builtinModules } = require("module");
let quotesData = [
  { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 'bananas';

module.exports = {
  list: quotesData,
  thing: index
}
//see line 17 "app.get('/quotes', (req, res) => {
//   console.log('Hi from get request');
//   res.send(quotesData.thing);
// });
//quotesData is the variable name I GAVE to the import of the quotes.js file....taco