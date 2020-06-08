import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import './style/style.scss';
import { store } from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
