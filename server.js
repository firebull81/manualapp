var express = require('express');
var stylus = require('stylus');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var evn = process.env.NODE_ENV || 'development';

var app = express();

app.set('view engine', 'jade');

app.set('views', __dirname + '/server/views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('*', function(req, res) {
    res.render('index');
});

var port = 3030;

app.listen(port);

console.log('Server running on port ' + port);

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function(str, path) {
           return stylus(str).set('filename', path);
        }
    }
))

app.use(express.static(__dirname + '/public'))
