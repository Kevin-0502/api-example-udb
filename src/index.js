'use strict'
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


//settings
const port = process.env.PORT || 3000;
app.set('json spaces', 2);

//mongodb connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.7wh1e.mongodb.net/api?retryWrites=true&w=majority').then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//routes
app.use(require('./routes/index'));

//starting the server
app.listen(port, () => {
    console.log('Server listening on port 3000')
})