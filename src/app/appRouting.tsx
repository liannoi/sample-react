import React from 'react';
import {Route} from 'react-router-dom';

import {Home} from './components/Home/Home';
import {AuthorList} from './components/authors/AuthorList/AuthorList';
import {BookList} from './components/books/BookList/BookList';

export const routes = [
    {
        path: '/authors',
        component: AuthorList,
    },
    {
        path: '/books',
        component: BookList,
    },
    {
        path: '/',
        component: Home,
    },
];

// @ts-ignore
export const AppRouting = route => {
    return (
        <Route path={route.path} render={props => (<route.component {...props} routes={route.routes}/>)}/>
    );
};
