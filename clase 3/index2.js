//framework express es bueno para node y hacerlo más practico

//me permite crear servidores de forma pratica, es de nodejs
const express = require('express');
const colors = require('colors');

//CREO UN SERVIDORE Y ABAJO LO GUARDO EN UNA CONSTANTE
const server = express();

server.get('/', function (req, res){
    res.send ('Hola mundito con express') //es un metodo de express
})

server.listen(3000, function () {
    console.log('server on port 3000'.red);
})

//esto de arriba es un servidor, más practico de escribir

//si no creamos una ruta para nuestro servidor te figura en el host "canot GET",
