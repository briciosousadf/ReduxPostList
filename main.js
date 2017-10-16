import React from 'react';
import ReactDOM from 'react-dom';
import App, {Home, Contact, About} from './App.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
       <Switch>
          <Route path = '/home' component = {Home} />
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route component = {App} />
       </Switch>
    </BrowserRouter>
     
 ), document.getElementById('app'))