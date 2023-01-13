const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const signup = require('./signup.js');
require('dotenv').config();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
/*app.post('/signup',function(req,res){
   let [fname,lname,mail,pass] = Object.values(req.body).map(e => e.trim());
   console.log([fname,lname,mail,pass]) 
});
app.post('/check',function(req,res){
  
}*/
app.use('/register',signup);
app.listen(8000)
console.log(77)
