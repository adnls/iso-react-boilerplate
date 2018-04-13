import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes.js';
import { StaticRouter as Router } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
    const content = renderToString(
    <Provider store={store}>
        <Router location={req.path} 
                context={context}>
            <div>{renderRoutes(Routes)}</div>
        </Router>
    </Provider>
);    
        const helmet = Helmet.renderStatic();
        const html = 
        `<html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            </head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>`;
        
    return html;    
}