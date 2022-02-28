var placemodel = require('../model/todomodel');
var bodyParser = require('body-parser');

module.exports = function(app)
{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('api/findmodels/:cname',function(req,res)
    {
            var s = req.params.cname;
          // i for case insensitive
            placemodel.find({cityname: {$regex: s,$options:"$i"}},function(err,findmodels)
            {
                if(err) throw err;
                res.send(findmodels);
            }); 
            
            /*placemodel.find({cityname: req.params.cname},function(err,findmodel)
            {
                if(err) throw err;

                res.send(findmodel);
            });*/

            
    });
    app.get('/api/findmodel/:id',function(req,res)
    {
        placemodel.findById({id: req.params.id},function(err,findmodel)
        {
            if(err) throw err;
            
            res.send(findmodel);
            
           
        });
    });

}