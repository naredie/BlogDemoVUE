'use strict'
//index solo crea la conexion con la base de datos (servidor)
//cargamos mongoose
var mongoose = require('mongoose');
var app = require('./app');
const config = require('./config');
var port = config.port;
console.log('port ' + port);

//defino el puerto para que lo leea del proceso y si no lo defina como 3900 por default
//app.set('port', port);

//Forzamos a que los metodos antiguos de trabajo se desactiven - lo pone en la documentacion de mongoose
mongoose.set('useFindAndModify', false);
//esto lo recomienda mongoose en su documentacion
mongoose.Promise = global.Promise;

console.log('db ' + config.db);
//conexion a mongodb - localhost es donde corre nuestro mongodb y api-rest-blog es el nombre de la base de datos
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }).catch (err => console.log(err)).then(() => {
    console.log('Conexion a la bd correcta');

    //crear servidor y escuchar peticiones HTTP
    //app.listen(app.get(port), () => {
    app.listen(port, () => {
        console.log('Servidor corriendo en puerto ' + port);
    });
});