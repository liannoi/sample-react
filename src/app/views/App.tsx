import React from 'react';
import {Switch} from 'react-router-dom';

import {NavTopMenu} from '../components/NavTopMenu/NavTopMenu';
import {MakeRouteWithSubRoutes, routes} from '../common/routing';

export const App = () => {
    return (
        <React.Fragment>
            <NavTopMenu/>

            <div className="container">
                <main role="main">
                    <Switch>
                        {routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)}
                    </Switch>
                </main>
            </div>
        </React.Fragment>
    );
};
