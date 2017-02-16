import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import axios from 'axios';
import configureStore from './store/configureStore';

import AuthPage from './components/AuthPage';

const store = configureStore(browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

class Champions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			champions: []
		};
	}
}

componentDidMount() {
	// need to get api info on /api and it needs to be forbidden from being
	// entered into search bar
	axios.get('/api')
	.then(res => {
		const champions = res.data.data.children.map(obj => obj.data);
		this.setState({ champions });
	})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AuthPage} />
    </Router>
  </Provider>, 
  document.getElementById('app')
);