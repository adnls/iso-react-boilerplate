import proxy from 'express-http-proxy'
import 'babel-polyfill';
import http from 'http';
import express from 'express';
import renderer from './helpers/renderer.js';
import createStore from './helpers/createStore.js';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes.js';

const app = express();
const server = http.createServer(app);

/*middlewares*/
app
.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator : opts => {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}))
.use(express.static('public'))

.get('*', (req, res) => {
    const store = createStore(req);
    
    const promises = matchRoutes(Routes, req.path).map( ({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve);
            });
        }
    });

    Promise
    .all(promises).then(() => {
        const context ={};
        const content = renderer(req, store, context);
        
        if (context.url){
            return res.redirect(301, context.url);
        }

        if (context.notFound){
            res.status(404);
        }
        res.send(content);
    })
});

/*launch server*/
const port = 3000;
server.listen(port, () => console.log('\n> Listening on http://localhost:' + port + '\n'));