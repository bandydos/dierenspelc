const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Listening in port: ${port}.`);
})

app.use(express.static('public'));

const animalsjson = require('./data/dierenb.json');

app.get('/animals', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.json(animalsjson);
})
