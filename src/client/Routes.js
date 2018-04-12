import React from 'react';
import HomePage from './pages/HomePage.js';
import UsersListPage from './pages/UsersListPage.js';

export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users',
    }
];