import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './App/App.container.jsx';
import counter, {getData} from './App/reducers/counter';

const store = createStore(counter, applyMiddleware(thunk));
store.dispatch(getData());

ReactDOM.render(
 <App store={store}/>,
  document.getElementById('root')
);

