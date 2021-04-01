const warapi = require('./warapi.js');

const XMLHttpRequest = require('xhr2');

const express = require('express');
const app = express();

app.use('/map', express.static('public'));

app.get('/map/getDynamic', function(request, response) {
  response.sendFile(__dirname + '/data/dynamic-war-data.json');
});

app.get('/map/getStatic', function(request, response) {
  response.sendFile(__dirname + '/data/static-war-data.json');
});

app.get('/map/getActiveMaps', function(request, response) {
  response.sendFile(__dirname + '/data/active-maps.json');
});

const listener = app.listen(3002, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

warapi.updateWarData();
setInterval(warapi.updateWarData, 20000);
