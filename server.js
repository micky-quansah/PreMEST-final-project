const http = require('http');
const app = require('./app');
const configuration = require('./config/index');

const { port } = configuration;

const server = http.createServer(app);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Listening on ${port}`));
