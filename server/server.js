//IMPORTS
//Require express and bodyParser - gives us a function
const express = require('express');
const bodyParser = require('body-parser');


//Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;

const quotesData = require ('./modules/quotes.js');
//const quotes = require('./modules/quotes.js');


//express static file serving - public is the folder name
app.use(express.static('server/public'));
//helps translate data from the client to the server
app.use(bodyParser.urlencoded({extended: true}));


app.get('/quotes', (req, res) => {
  console.log('Hi from get request');
  res.send(quotesData.list);
});
//BECAUSE the server thinks a number is an error code...I have to wrap any numbers I"m importing up in an object with the key "number"(or whev), and then a value of my require variableName (taco).key I've exported



app.get('/randomQuote', (req, res) => {
  let randomNumber = getRandomInt(quotesData.list.length);
  res.send(quotesData.list[randomNumber]);
});

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}
//req is going to hold the data and it can be accessed in the post
//req is an object
app.post('/quotes', (req, res) => {
  //req.body is whatever data is being sent...in this case, by postman
  //req.body is a standard command.... .body is a built in method with postman
  console.log('hello from post', req.body);
  //push req.body to our quotesData array
  quotesData.list.push(req.body);
  res.sendStatus(200);
});



//can go anywhere on the page once the app is defined
app.listen(port, () => {
  console.log("Up and running on port: ", port);
});

