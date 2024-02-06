
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults({
    static: "./build",
});

server.use(middlewares);
server.use('/api', router);

server.get('*', (req, res) => {
    // serve index.html for all other routes to support HTML5Mode
    res.sendFile(__dirname + './build/index.html');
});

server.listen(process.env.REACT_APP_API_PORT, () => {
    console.log(`JSON Server is running on ${process.env.REACT_APP_API_PORT}`);
});


