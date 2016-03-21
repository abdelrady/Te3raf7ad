var express = require('express')
    , router = express.Router()
    , path = require('path')
    , mongoClient = require('mongodb')
    .MongoClient,
    assert = require('assert'),
    mogoServerUrl = "localhost:27017",
    appDbName = "te3raf7adAppDB";


router.get('/', function (req, res) {
    mongoClient.connect("mongodb://"+mogoServerUrl+"/"+appDbName, function (err, db) {
        if (err) throw err;
        console.log("Successfully connected to MongoDB.");
        db.collection('Categories').find({}).toArray(function (err, categories) {
            if (err) throw err;
            if (categories.length < 1) {
                console.dir("No documents found. Did you forget to mongorestore?");
                return res.send("No documents found. Did you forget to mongorestore?");
            }
            res.send(categories);
        });
    });
});

router.get('/errr', function (req, res, next) {
    next(Error("An error has been occurred."));
});


module.exports = router;