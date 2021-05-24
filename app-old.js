const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = [
        {
            nombre: 'Gonzalo',
            edad: 41,
            req: req.url
        },
        {
            nombre: 'Juan',
            edad: 41,
            req: req.url
        },
        {
            nombre: 'Marcelo',
            edad: 41,
            req: req.url
        }
    ];
    res.write(JSON.stringify(salida));
    res.end();
})
    .listen(8080);

console.log('Escuchando Puerto', 8080);