import http from 'http';
import express from 'express';
import renderer from './helpers/renderer.js';
const app = express();
const server = http.createServer(app);

/*middlewares*/
app.use(express.static('public'));

/*express routes config*/
app.get('/', (req, res, next) => {
    res.send(renderer());
});

/*launch server*/
const port = 8080;
server.listen(port, () => console.log('\n>> Listening on \`http://localhost:' + port + '/\`\n'));