//all imports
const express = require('express');
const mongoose = require('mongoose');
const productModel = require('./src/product/productModel');
var routes = require('./routes/routes');

//global variables
const server = express();
server.use(express.json());

//use router
server.use(routes);

mongoose.connect("mongodb://localhost:27017/todo_api", { useNewUrlParser: true},(error)=> {
    if(error){
        console.log("error in connect to database " + error);
    }else{
        console.log("connected to the database...");
    }
})


server.listen(3000, (error)=> {
    if(error){
        console.log('Error');
    }else{
        console.log("sever satrted...");
    }
});

// server.get('/test',(req, res)=> {
//     res.send('hello world...');
// });

//server.get('/getAll/products/:id', );



server.post('/product/create',(req, res)=> {

    console.log(req.body);

    const productModelCreate = new productModel();
    productModelCreate.item_name = req.body.item;
    productModelCreate.description = req.body.description;
    productModelCreate.qty = req.body.qty;
    productModelCreate.save((error, dataValue)=> {
      if(error){
          console.log(error);
         res.send({
            status: false,
            data: error
         });
      }else{
          res.send({
              status: true,
              data: dataValue
          });
      }

    });

});
