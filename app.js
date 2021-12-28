const express = require('express');
const warapi = require('./warapi.js');

const app = express();

app.use('/map', express.static('public'));
app.get('/map', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

// Shard 1
app.get('/map/api/live-1/war', (request, response) => {
    response.sendFile(__dirname + '/data/live-1/war.json');
});
app.get('/map/api/live-1/regions', (request, response) => {
    response.sendFile(__dirname + '/data/live-1/regions.json');
});
app.get('/map/api/live-1/dynamic', (request, response) => {
    response.sendFile(__dirname + '/data/live-1/dynamic.json');
});
app.get('/map/api/live-1/static', (request, response) => {
    response.sendFile(__dirname + '/data/live-1/static.json');
});

// Shard 2
app.get('/map/api/live-2/war', (request, response) => {
    response.sendFile(__dirname + '/data/live-2/war.json');
});
app.get('/map/api/live-2/regions', (request, response) => {
    response.sendFile(__dirname + '/data/live-2/regions.json');
});
app.get('/map/api/live-2/dynamic', (request, response) => {
    response.sendFile(__dirname + '/data/live-2/dynamic.json');
});
app.get('/map/api/live-2/static', (request, response) => {
    response.sendFile(__dirname + '/data/live-2/static.json');
});

const port = 3002;
app.listen(port, () => {
    console.log(`App listening at ${port}`);

    warapi.updateWarData();
    setInterval(warapi.updateWarData, 60000);
});