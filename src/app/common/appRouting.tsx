import React from 'react';
import {Route} from 'react-router-dom';

import {Home} from '../components/Home/Home';
import {Author} from '../views/Author';

export const routes = [
    {
        path: '/authors',
        component: Author,
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
