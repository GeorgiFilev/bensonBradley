
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const cors = require("cors");
const middlewares = jsonServer.defaults({
    static: "./build",
});


const port = process.env.REACT_APP_API_PORT || 8001;
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    })
);
server.use(router);
server.use(cors());
server.listen(port, () => {
    console.log("JSON Server is running");
});


