import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import Root from './components/Root';

const store = createStore(todoApp);

render(
  <Root store={store} />,
  document.getElementById('root')
);
