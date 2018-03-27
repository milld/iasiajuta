import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { messaging } from './firebase';
import Login from './js/views/Login/index';
import Oportunitati from './js/views/Oportunitati/Oportunitati';
import OportunitateNoua from './js/views/Oportunitati/OportunitateNoua';
import OportunitateExistenta from './js/views/Oportunitati/OportunitateExistenta';
import OportunitateAplica from './js/views/Oportunitati/OportunitateAplica';
import Header from './js/components/Header/Header';
import './index.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/oportunitati' component={Oportunitati} />
      <Route exact path='/oportunitati/:id' component={OportunitateExistenta} />
      <Route exact path='/oportunitati/:id/aplica' component={OportunitateAplica} />
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
