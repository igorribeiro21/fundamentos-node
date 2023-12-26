import http from 'http';

const server = http.createServer((req, res) => {
    return res.end('Hello Teste 2');
});

server.listen(3333);



