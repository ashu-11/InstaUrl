const express = require('express');
const router = express.Router();
module.uniqid_debug = true
const uniqid = require('uniqid');

//Load url model
const URL = require('../../models/Urls');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

//@route GET /api/shoten/test
//@desc Test api end point
//@access Public
router.get('/test', (req, res) => res.json({msg : "Api is working" }));
module.exports = router;

//@route POST api/shorten
//@desc Post a url tp shorten
//@access Public
router.post('/', (req, res) => {
    //console.log(req.body);

    if(req.body.url) {
        urlData = req.body.url
    }
    console.log('Urlis : ', urlData);

    //check if the already exist
    
    URL.findOne({url : urlData},(err,doc) => {
        if(doc) {
            console.log('entery found is database');
            console.log(doc.id);
            res.send({
                url : urlData,
                hash : doc._id,
                status:200,
                statusTxt: 'ok'
            })

        }
        else {
            console.log('this is a new url');
           
            const webaddress = new URL({
                _id: uniqid(),
                url : urlData
            });
            //removing the data after certain time period 
            //db.URL.useCreateIndex( { "createdAt": 1 }, { expireAfterSeconds: 3600 } );


            webaddress.save((err) => {
                if(err) {
                    return console.log(err);
                }
                else {
                    
                    res.send({
                        url : urlData,
                        hash : webaddress._id,
                        status:200,
                        statusTxt: 'ok'
                    })
                   
                }
            })
        }
    })
});