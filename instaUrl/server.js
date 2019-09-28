const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



//init
const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Database key
const db= require('./config/Keys').mongoURI;

//connect to database
mongoose.connect(db,{ useUnifiedTopology: true, useNewUrlParser: true,  useCreateIndex: true })
    .then(() => console.log('mongodb connected '))
    .catch(err => console.log('error'));



//routes
const shorten  = require('./routes/api/shorten');
app.use('/api/shorten', shorten);

const redirect = require('./routes/api/redirect');

app.use('/api/redirect',  redirect);

app.get('/:hash',(req, res) => {
    const id = req.params.hash;
    console.log(id);
    //findng the id from the database 
    URL.findOne({_id:id}, (err,doc)=> {
        if(doc) {
            //console.log(doc.url);

            res.redirect('http://'+ doc.url);
        }
        else {
            res.redirect('/');
        }
    })
});

//path 
app.get('/', (req, res) => {
    res.send('hello world');
});



//port
const port = process.env.PORT||5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
