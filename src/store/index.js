import { createStore } from 'redux';
import foodApp from 'reducers';

const store = createStore(
    foodApp /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;