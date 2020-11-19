'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//CARGAR RUTAS
var project_routes = require('./routes/project');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//RUTAS
app.use('/api', project_routes);

//EXPORTAR
module.exports = app;