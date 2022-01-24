
//======================================
//  Port
//======================================
process.env.PORT = process.env.PORT || 8888;

//======================================
//  Env
//======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======================================
//  Token expire
//======================================
process.env.EXP_TOKEN = 60 * 60 * 24 * 20;

//======================================
//  Auth seed
//======================================
process.env.SEED = process.env.SEED || 'this-is-the-develpment-seed';

//======================================
//  DB
//======================================
let urlDB;

if ( process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/dango'
} else {
    urlDB = process.env.MONGODB_URI;
}

process.env.URLDB =  urlDB;