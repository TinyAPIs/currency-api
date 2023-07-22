const app = require('../server'); // adjust the path as needed
const { createServer } = require('@vercel/node-server');
const server = createServer(app);
module.exports = server;
