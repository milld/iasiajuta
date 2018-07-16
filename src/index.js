import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { messaging } from './firebase';
import Login from './js/views/Login/Login';
import Oportunitati from './js/views/Oportunitati/Oportunitati';
import OportunitateExistenta from './js/views/Oportunitati/OportunitateExistenta';
import OportunitateNoua from './js/views/Oportunitati/OportunitateNoua';
import Header from './js/components/Header/Header';
import Profil from './js/views/Profil/Profil';
import './index.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/oportunitati' component={Oportunitati} />
      <Route exact path='/oportunitati/nou' component={OportunitateNoua} />
      <Route exact path='/oportunitati/:id' component={OportunitateExistenta} />
      <Route exact path='/profil/:id' component={Profil} />
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
/* messaging.onMessage(payload => {
  console.log(payload);
}) */
