var mongodb = require('mongodb');
var movies = require('./movies');

mongodb(function(err, db) {
    if (err) {
        console.log(err);
        process.exit(1);
    }


})