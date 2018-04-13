import React from 'react';
import HomePage from './pages/HomePage.js';
import UsersListPage from './pages/UsersListPage.js';
import App from './App.js';
import NotFoundPage from './pages/NotFoundPage.js';
import AdminsListPage from './pages/AdminsListPage.js';

export default [
    {
        ...App,
        
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }   
];

