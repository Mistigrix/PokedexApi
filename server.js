const http = require('http');
const app = require('./app');

const HOSTNAME = '192.168.252.67';
const PORT = 8000

const server = http.createServer(app)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started at http://${HOSTNAME}:${PORT}`);
})