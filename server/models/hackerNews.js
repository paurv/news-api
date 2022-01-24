const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema;
let hackerNewsSchema = new Schema(
    {
        hits: [],
        nbHits: { type: Number },
        page: { type: Number },
        nbPages: { type: Number },
        hitsPerPage: { type: Number },
        exhaustiveNbHits: { type: Number },
        exhaustiveTypo: { type: Number },
        query: { type: String, trim: true },
        params: { type: String, trim: true },
        processingTimeMS: { type: Number }
    }, {
        versionKey: false
    }
);

module.exports = mongoose.model('HackerNews', hackerNewsSchema);
