const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema  for database 
const UrlSchema = new Schema({
    _id: { type : String,
          /* sparse: true,
           unique: true*/
       
        },
    url: { 
        type : String,
        required : true
    },
    hash: {
        type:String
    },
    date: {
        type : Date,
        default: Date.now
    }
   
});
UrlSchema.index({ "date": 1 }, { expireAfterSeconds: 600 });
module.exports = URL = mongoose.model('URL', UrlSchema);
