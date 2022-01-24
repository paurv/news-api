const express = require('express');
const News = require('../models/hackerNews');
// // const { urlParser } = require('../middlewares')
const _ = require('underscore');

const app = express();

// POST: post base data to mongo
// POST: hits to mongo
// GET: return paginated results, max of 5 items
// GET: filter by author, tags, title
// DELETE: remove items from db
app.get('/', ( req, res ) => {
    News.find()
        .exec()
        .then( allNews => {
            res.json({
                ok: true,
                allNews
            });
        }).catch( err => {
            res.status(400).json({
                ok: true,
                err
            });
        })
})

// app.use('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');

module.exports = app;

