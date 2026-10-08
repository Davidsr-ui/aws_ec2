const http = requi-re('http');

const port = 3000; 


const server = http.createServer((req, res) => {

res.statusCode = 200;

res.setHeader('Content-Type','text/plain');

res.end('Hola a todos les dice el Grupo 4');

});


server.listen(port,() => {

console.log('Server corriendo en el puerto 3000');

});
