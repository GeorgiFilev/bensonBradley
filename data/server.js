const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer('db.json');
const middlewares = jsonServer.defaults();
const posrt = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port);