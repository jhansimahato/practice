//here we create the schema
//we require mongoose to create the schema

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//creation of schema
var placeschema = new Schema({
    id: Number,
    cityname: String
});


//To use our schema definition, we need to convert our schema into a Model we can work with. 
//mongoose.model(modelname,schema)
var  placemodel = mongoose.model('placemodel',placeschema);

module.exports = placemodel;
