import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Second from './components/Main/Second/Second.js';
import {Third} from './components/Main/Third/Third.js';

export default (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/second' component={Second}/>
        <Route path='/third' render={() => (<Third />)}/>
    </Switch>
)