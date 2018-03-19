import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { messaging } from './firebase';
import Login from './js/views/Login/index';
import Oportunitati from './js/views/Oportunitati/Oportunitati';
import Header from './js/components/Header/Header';
import './index.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/oportunitati' component={Oportunitati} />
    </Switch>
  </main>
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
