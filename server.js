
// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("/db.json");
// const middlewares = jsonServer.defaults();
// const cors = require("cors");

// server.use(
//     cors({
//         origin: true,
//         credentials: true,
//         preflightContinue: false,
//         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     }),
// );
// server.options("*", cors());

// server.use(middlewares);
// server.use(router);
// server.listen(process.env.REACT_APP_API_PORT, () => {
//     console.log("JSON Server is running");
// });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        // Handle preflight requests
        res.writeHead(200);
        res.end();
        return;
    }

    // Handle your other routes here

    // Assuming you have a route for /blogs
    if (req.url === '/blogs' && req.method === 'GET') {
        // Read data from a file (you should replace this with your actual data source)
        fs.readFile('blogs.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = process.env.REACT_APP_API_PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
