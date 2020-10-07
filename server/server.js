
//Require express - gives us a function
const express = require('express');

//Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;

const taco = require ('./modules/quotes.js');


//express static file serving - public is the folder name
app.use(express.static('server/public'));

let index = 0;

app.get('/quotes', (req, res) => {
  console.log('Hi from get request');
  res.send({number: taco.thing});
});
//BECAUSE the server thinks a number is an error code...I have to wrap any numbers I"m importing up in an object with the key "number"(or whev), and then a value of my require variableName (taco).key I've exported

app.get('/randomQuote', (req, res) => {
  let randomNumber = getRandomInt(quotesData.length);
  res.send(quotesData[randomNumber]);
});

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

app.listen(port, () => {
  console.log("Up and running on port: ", port);
});

