import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store/configureStore';

import NavBar from './components/NavBar';
import AuthPage from './components/AuthPage';
import Landing from './components/Landing';
import ChampionsList from './components/ChampionsList';
import NoMatch from './components/NoMatch';

import { requestSession } from 'actions/auth';

const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace, callback) {
  const state = store.getState();
  if (state.routing.locationBeforeTransitions.pathname !== '/auth' && !state.user.profile.username) {
    store.dispatch(requestSession());
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={NavBar}>
        <IndexRoute onEnter={requireAuth} component={Landing}/>
        <Route path="/auth" component={AuthPage}/>
      </Route>

      <Route path="/champions" component={ChampionsList}/>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>, 
  document.getElementById('app')
);