import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/home';
import NotFound from './pages/404';
import Login from './pages/login';
import Chocolate from './pages/chocolate';
import User from './pages/user';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/chocolate" exact component={Chocolate} />
        <Route path="/login" exact component={Login} />
        <Route path="/user" exact component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
