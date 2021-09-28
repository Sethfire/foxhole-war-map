import express from 'express';
import {updateWarData} from './warapi.js';

// __dirname workaround
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

    updateWarData();
    setInterval(updateWarData, 60000);
});