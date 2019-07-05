const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Carlos',
            edad: '23',
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        //resp.write('Hola Mundo');
        resp.end();
    })
    .listen(3000);

console.log('Escuchando el puerto 3000');