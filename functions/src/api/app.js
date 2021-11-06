const express = require('express');
// const bodyParser = require('body-parser');

const { generatorFibonacci } = require('../middlewares/fibonacciMiddleware');
const { getFabioStreet } = require('../middlewares/getFabioHouseMiddleware');


const app = express();
// app.use(bodyParser.json());

app.get('/fibonacci/:length', generatorFibonacci);
app.get('/fabioStreet', getFabioStreet);

module.exports = { app };