// get all required items
var express = require('express');
var engines = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var assert = require('assert');
var logger = require('morgan');
var path = require('path');

var app = express();


// configure our server
app.use(logger('dev'));
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



// make sure we can connect to database before starting server
MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

    assert.equal(null, err);
    console.log('Successfully connected to mondodb');

    app.get('/', function(req, res) {
        db.collection('movies').find({}).toArray(function(err, docs) {
            res.render('index', {'movies': docs} );
        });
    });

    app.post('/', function(req, res) {
        var title = req.body.movieTitle;
        var year = req.body.movieYear;
        var imdb = req.body.movieIMDB;

        db.collection('movies').insertOne({
                                            title: title,
                                            year: year,
                                            imdb: imdb
                                        }, function(err, doc) {
                                            assert.equal(null, err);
                                            res.render('newmovie', {movie: req.body});
                                        }
        );

    });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });



    app.listen(3000, function() {
        console.log('Server listening on port 3000');
    });

});
