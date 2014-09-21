var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || 3030,
    app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: function(str, path) {
           return stylus(str).set('filename', path);
        }
    }
));
app.use(express.static(__dirname + '/public'));

if (env == 'development') {
    mongoose.connect('mongodb://localhost/manualapp');
}
else {
    mongoose.connect('mongodb://ManualApp:CrossBull81@ds033400.mongolab.com:33400/manualapp');
}
var db = mongoose.connection;

db.once('open', function(err){
    if(err) {
        console.log('Database could not be opened: ' + err);
        return;
    }
    console.log('Database up and running...')
});

db.on('error', function (err) {
    console.log('Database error: ' + err);
});

var messageSchema = mongoose.Schema({
    message: String
});

var Message = mongoose.model('Message', messageSchema);
var messageFromDatabase;

Message.remove({}).exec(function(err){
    if(err){
        console.log('Message could not be cleared: ' + err);
        return;
    }
    Message.create({message: 'Hi from Mongoose'})
        .then(function(model){
            messageFromDatabase = model.message;
        });
});

app.get('/partials/:partialName', function (req, res) {
    res.render('partials/' + req.params.partialName)
});
app.get('*', function(req, res) {
    res.render('index', {message: messageFromDatabase});
});

app.listen(port);

console.log('Server running on port ' + port);

console.log(env);