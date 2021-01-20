'use strict'

//cargar modulos de node para crear el servidor
var express = require('express');
var bodyparser = require('body-parser');
const morgan = require('morgan');
//ejecutar express para trabajar con http
var app = express();

//cargar ficheros rutas
var article_routes = require('./routes/articleRoutes');

//cargar middlewares 
//Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.
//extended false es para asegurarnos que solo llegan datos, ninguna imagen ni nada mas raro, ademas sirve para que el codigo pueda entender los datos,
//si no tendremos error unexpected
app.use(bodyparser.urlencoded({ extended: false }));
//esto nos sirve para entender los datos del framework

app.use(bodyparser.json());
//tambien podemos utilizar app.use(express.json())

//morgan se utiliza para tener informacion del servidor
app.use(morgan('dev'));

app.use(express.static(__dirname + 'public'));

//activar CORS -- Acceso cruzado entre dominios desde cualquier frontend
//permitimos las llamadas http a la api desde cualquier frontend
//esto es un midelware que se ejecuta antes de cada uno de los metodos
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //cualquier cliente puede hacer peticiones ajax
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//anadir prefijos a rutas / Cargar rutas
app.use('/api', article_routes);

//exportar el modulo (fichero actual)
module.exports = app;