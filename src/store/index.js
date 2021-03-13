import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from '../reducers';

//to store store data in localStorage
const saveLocal = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('goal', serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

//to get data from localStorage
const loadLocal = () => {
  try {
    const serialisedState = localStorage.getItem('goal');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

//return store with middleware
let store;
export function configureStore() {
  store = createStore(reducer, loadLocal(), applyMiddleware(thunk, logger));
  store.subscribe(() => saveLocal(store.getState()));

  return store;
}
