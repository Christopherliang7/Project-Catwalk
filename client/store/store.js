import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';

export default createStore(
  rootReducer,
  {/* write your initial states here */},
  applyMiddleware(thunk),
);