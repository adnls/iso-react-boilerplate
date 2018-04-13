import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header.js';
import { fetchCurrentUser } from './actions/index.js';

const App = ({ route }) => {
    return(
         <div>
             <Header/>
            {renderRoutes(route.routes)}
        </div>);
}

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}