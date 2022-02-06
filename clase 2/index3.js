const http = require('http'); //httpS es protocol secure, uso http como ejemplo

const handleServer = function (req, res) { //requerir y responder
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1>Hola desde Nodejs curso practico</h1>');
    res.end();                       //para finalizar la resp.                   //para recibir la info de computadores del cliente al servidor
}

const server = http.createServer(handleServer); 


server.listen(3000 , function (){
        console.log('server on port 3000');
});                //aca es el puerto, lo hago escuchar en el puerto 300 con un callstack, y después se ejecuta el mensaje y c codigo de estado 200.







//pd: favicon.co en la consola figura esto cuando solicita un icono. igual no pasa nada.