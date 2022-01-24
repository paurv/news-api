require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const newsRouter = require('../server/routes/news');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', newsRouter);

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.listen(process.env.PORT, () => {
    console.log('Listening port on: ', process.env.PORT);
});
