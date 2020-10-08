//console.log('Hello from js');
$(document).ready(onReady);

function onReady(){
  //console.log('Hello from jquery');
  //perform GET request
  getRandomQuote();
  $('#submit').on('click', submitQuote);
}//end onReady

function submitQuote(){
  let quote = $('#quote').val();
  let author = $('#author').val();
  console.log('clicked', quote, author);
  //send data to server via post request
  $.ajax({
    method: 'POST',
    url: '/submitQuotes',
    data: {
      quote: quote,
      author: author
    }
  }).then(function(response){
    console.log('response', response);
  }).catch(function(error){
    alert(error);
  });//catches errors from the server and alerts the user
}

function getRandomQuote(){
  console.log('get the quote');
  //this is a built in jQuery method that lets me access 
  //.ajax is an object that expects a parameter with 2 keys, the 
  $.ajax({
    method: 'GET',//all caps is prime standard
    url: '/randomQuote'//looks at my get request in server.js on line 29
  }).then(function(response){
    console.log('response', response);
    appendToDom(response);
  })//.then is a promise...because ajax is asynchronous it makes the rest of the function wait until .ajax is done
  //response is the response from the database (res.send).
}//end getRandomQuote


function appendToDom(dataToAppend){
  $('#output').html(`
    <p>
      Quote: ${dataToAppend.quote}<br/> 
      -<i>${dataToAppend.author}</i>
    </p>
  `)
}//end appendToDom