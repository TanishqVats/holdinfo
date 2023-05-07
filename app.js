const express = require('express');
const cryptoRouter = require('./routes/cryptoRoutes');

const app = express();


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/holdinfo', cryptoRouter)

module.exports = app;