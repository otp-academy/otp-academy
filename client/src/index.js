import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store/configureStore';

import AuthPage from './components/AuthPage';
import ChampionsList from './components/ChampionsList';
import NoMatch from './components/NoMatch';

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AuthPage}/>
      <Route path="/champions" component={ChampionsList}/>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>, 
  document.getElementById('app')
);