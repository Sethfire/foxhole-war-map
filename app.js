const express = require('express');
const warapi = require('./warapi.js');

const app = express();

app.use('/map', express.static('public'));

app.get('/map', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/map/api/dynamic', (request, response) => {
    response.sendFile(__dirname + '/data/dynamic.json');
});

app.get('/map/api/static', (request, response) => {
    response.sendFile(__dirname + '/data/static.json');
});

app.get('/map/api/regions', (request, response) => {
    response.sendFile(__dirname + '/data/regions.json');
});

const port = 3002;
app.listen(port, () => {
    console.log(`App listening at ${port}`);

    warapi.updateWarData();
    setInterval(warapi.updateWarData, 60000);
});