
//Require express - gives us a function
const express = require('express');

//Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;


//express static file serving - public is the folder name
app.use(express.static('server/public'));

let quotesData = [
  { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 0;

app.get('/quotes', (req, res) => {
  console.log('Hi from get request');
  res.sendStatus(418);
});

app.listen(port, () => {
  console.log('Up and running on port:', port);
});

