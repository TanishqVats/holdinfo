const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const fetchApi = require('./util/fetchAPi');

dotenv.config({ path: './config.env' });
const app = express();

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {})
    .then(() => console.log('DB connection successful'))
    .catch((error => {
        console.error('MongoDB connection failed: ', error.message);
    }));


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


fetchApi();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
