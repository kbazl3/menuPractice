var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Food = Schema({
    color: String,
    name: {type: String, required: true},
    reviews:[{
        reviewer: {type : String, required: true},
        rating: {type: Number, required: true},
        date: {type: Date, default: new Date()}
    }]
});

module.exports = mongoose.model('Food', Food);
