//inserting data in db
//we first include the the file where the schema anf model are created

var setupdata = require('../model/todomodel.js');

// create and place data in database

module.exports=function(app)
{

app.get('/api/placedata',function(req,res)
{
//creating an array of data to be placed
var startdata = [

    {
        id:101,
        cityname:'vizag'
    },
    {
        id:102,
        cityname:'vizinagaram'
    },
    {
        id:103,
        cityname:'vizzi'
    },
    {
        id:104,
        cityname:'hyderabad'
    }

];

setupdata.create(startdata,function(err,result)
{
  res.send(result);
});

});
}