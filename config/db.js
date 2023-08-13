/**
 * Created by Konstantin on 23.07.2017.
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let dbURI = 'mongodb://localhost:32769/nodemongo';

db = mongoose.createConnection(dbURI, {
    user: "admin",
    pass: "1234",
    // useMongoClient: true,
    useNewUrlParser: true,
    // useUnifiedTopology: true
})

// CONNECTION EVENTS
// When successfully connected
db.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
db.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    db.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = db;