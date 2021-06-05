const warapi = require('./warapi.js');

const express = require('express');
const app = express();

app.use('/map', express.static('public'));

app.get('/map/api/dynamic', function(request, response) {
    response.sendFile(__dirname + '/data/dynamic.json');
});

app.get('/map/api/static', function(request, response) {
    response.sendFile(__dirname + '/data/static.json');
});

app.get('/map/api/activemaps', function(request, response) {
    response.sendFile(__dirname + '/data/activemaps.json');
});

app.get('/map', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

const port = 3002;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

warapi.updateWarData();
setInterval(warapi.updateWarData, 60000);