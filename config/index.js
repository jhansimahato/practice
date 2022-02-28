//in this file we create a module which returns the database connection string
//for id and password we need to import config.json file
var configvalues = require('./config');
module.exports = { 

    //creating a property
    getdbconnectionstring: function()
    {
        return  'mongodb+srv://'+configvalues.uname+':'+configvalues.pwd+'@cluster0.ayknk.mongodb.net/places?retryWrites=true&w=majority';
    }
 }