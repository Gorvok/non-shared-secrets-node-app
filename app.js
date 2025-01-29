require("dotenv").config({ path: "./.env" });

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

if (!process.env.SECRET_KEY || !process.env.NODE_ENV) {
    throw new Error("Missing required secrets. Please add a .env file with SECRET_KEY and NODE_ENV.");
}

console.log("✅ Non-shared secrets loaded successfully:");
console.log(`🌍 NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`🔑 SECRET_KEY: ${process.env.SECRET_KEY}`);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Secrets loaded successfully from .env (not shared in repo).\n");
});

server.listen(port, hostname, () => {
    console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
