var express = require('express');
var bodyParser = require('body-parser');
var app= express();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

app.use(express.static('public'));

app.get('/', function(request, response) {
    let html = '';
    html += '<h1>This is an example</h1>';
    html += '<p>Hello, World!</p>';
  
    response.send(html);
  });

  app.listen(3000, function(){
    console.log("Web server running at: http://localhost:3000");
    console.log("Type Ctrl+C to shut down the web server");
});