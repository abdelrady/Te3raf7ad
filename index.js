var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    path = require("path"),
    routes = require('./routes/index');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

function errorHandler(err, req, res, next){
    console.log(err.message);    console.log(err.stack);
    res.sendStatus(500);
}

app.use('/', routes);
app.use(errorHandler);
app.use(function (req, res) {
    res.sendStatus(404);
});

app.set('port', process.env.PORT || 8085);
var server = app.listen(app.get('port'), function() {
  console.log('> Server up and listening on port ' + server.address().port);
});
