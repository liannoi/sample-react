import React from 'react';
import {Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import {NavTopMenu} from '../components/NavTopMenu/NavTopMenu';
import {MakeRouteWithSubRoutes, routes} from '../common/routing';

export const App = () => {
    return (
        <React.Fragment>
            <NavTopMenu/>

            <Container>
                <main role="main">
                    <Switch>
                        {routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)}
                    </Switch>
                </main>
            </Container>
        </React.Fragment>
    );
};
