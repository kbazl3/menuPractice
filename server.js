var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var foodCtrl = require('./controllers/foodCtrl');

var port = 8090;
var app = express();
var mongoUri = 'mongodb://localhost:27017/menu2';

app.use(bodyParser.json());
app.use(cors(0));
app.use(express.static(__dirname + '/public'));
console.log(__dirname);




app.post('/api/food', foodCtrl.addFood);
app.post('/api/food/review', foodCtrl.addReview);
app.get('/api/food', foodCtrl.getFood);
app.get('/api/food/review', foodCtrl.getOneReview);
app.delete('/api/food/:id', foodCtrl.deleteFood);



app.listen(port, function() {
    console.log('listening on ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('connected to mongodb at ' + mongoUri);
});
