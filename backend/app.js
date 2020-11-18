'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//CARGAR RUTAS

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//RUTAS
app.get('/',(req,res)=>{
    res.status(200).send(
        "<h1>pagina de inicio</h1>"
    );
});
app.get('/test',(req,res)=>{
    res.status(200).send({
        message: "API NodeJS"
    })
});

//EXPORTAR
module.exports = app;