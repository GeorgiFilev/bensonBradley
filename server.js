
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults({
    static: "./build",
});
const cors = require("cors");

// server.use(
//     cors({
//         origin: true,
//         credentials: true,
//         preflightContinue: false,
//         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     }),
// );
// server.options("*", cors());
server.use(middlewares);
server.use(
    jsonServer.rewriter({
        "/blogs/**": "/$1",
    })
)

server.use(cors());

server.use(router);
server.listen(process.env.REACT_APP_API_PORT, () => {
    console.log(`JSON Server is running on ${process.env.REACT_APP_API_PORT}`);
});


