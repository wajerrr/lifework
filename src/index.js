import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.container.jsx';
import counter from './App/reducers/counter';
import {createStore} from 'redux';
const store = createStore(counter);
ReactDOM.render(
 <App store={store}/>,
  document.getElementById('root')
);

