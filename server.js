
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const path = require('path');
const middlewares = jsonServer.defaults({
    static: "build",
});

server.use(middlewares);
server.use('/api', router);

server.get('*', (req, res) => {
    // serve index.html for all other routes to support HTML5Mode
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT, () => {
    console.log(`JSON Server is running on ${process.env.PORT}`);
});


