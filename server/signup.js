const express = require('express');
const cors = require('cors');
const app = express.Router();
const bodyparser = require('body-parser');
const mongo = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.MONGOURL;
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
function toArray(e,a){
  const _ = {};
  e.forEach((i,j) => {
    _[a[j]] = i
  });
  return _
}
app.post('/signup',function(req,res){
   let [fname,lname,mail,pass] = Object.values(req.body).map(e => e.trim());
   let objArr = toArray([fname,lname,mail,pass],Object.keys(req.body));
   console.log(objArr);
   console.log([fname,lname,mail,pass]);
   /* mongo.connect(url,function(err,db){
     if(err) throw err;
     let dbo = db.db('capp');
     dbo.collection('user').insertOne(objArr, function (err,result){
         if(err) throw err;
         console.log(result)
     })
   });*/
});
app.post('/login', function (req,res){
    let mail = req.body.mail;
    let pass = req.body.pass;
    console.log(req.body)
    mongo.connect(url, function (err,db){
        if(err) throw err;
        let dbo = db.db('capp');
        dbo.collection('user').findOne({email: mail,pass: pass}, function (err,result){
        console.log(result)
            if(result){
                res.json('valid')
            }
            else{
                res.json('err')
            }
        })
    })
});
app.post('/userlist', function(req,res){
   mongo.connect(url, function (err,db){
	if(err) throw err;
        let dbo = db.db('capp');
        dbo.collection('user').find({}).toArray(function (err,result){
            const names = [];
            for(let _ of result){
                names.push(_.email)
            }
            console.log(names)
            res.json(names);
        })
    })
})
module.exports = app;
console.log(799)
