import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './js/views/Login/index';
import './index.css';

import { messaging } from './firebase';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
    </Switch>
  </main>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  </header>
);

const Application = () => (
  <div>
    <Header />
    <Main />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('root')
);

// logging our messaging notification
messaging.onMessage(payload => {
  console.log(payload);
})
