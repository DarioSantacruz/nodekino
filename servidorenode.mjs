import { createServer } from 'node:http';
import * as ejs from 'ejs';

const server = createServer((req, res) => {
  ejs.renderFile('views/index.html', (err, str) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('An error occurred');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(str);
    }
  });
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with ⁠ node server.mjs ⁠