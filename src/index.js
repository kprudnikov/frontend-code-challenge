import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import './theme/_normalize.scss';

import App from './Containers/App';
import RentalsList from './Containers/AdsList';

const initialState = {};
const store = configureStore(initialState);

ReactDom.render(
  <Provider store={ store }>
    <App>
      <RentalsList />
    </App>
  </Provider>,
  document.getElementById('app'),
);
