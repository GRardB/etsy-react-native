import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import Game from './game';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const rootReducer = combineReducers(reducers);
const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Game />}
      </Provider>
    );
  }
}
