const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {res.end('This server is created from node.js')});
server.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`);});



