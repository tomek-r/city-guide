import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RoutePage from './RoutePage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/routes' component={RoutePage}/>
        </Switch>
    </main>
)

export default Main;
