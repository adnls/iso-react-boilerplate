import proxy from 'express-http-proxy'
import 'babel-polyfill';
import http from 'http';
import express from 'express';
import renderer from './helpers/renderer.js';
const app = express();
const server = http.createServer(app);
import createStore from './helpers/createStore.js';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes.js';

/*middlewares*/
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'localhost:8080';
        return opts;
    }
}));
app.use(express.static('public'));

/*express routes config*/
app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path).map( ({ route }) => {
        return route.loadData? route.loadData(store) : null;
    });
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

/*launch server*/
const port = 8080;
server.listen(port, () => console.log('\n>> Listening on \`http://localhost:' + port + '/\`\n'));