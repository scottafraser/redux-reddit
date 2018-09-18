import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import feedReducer from './reducers/feed-reducer'
import { Provider } from 'react-redux'

const store = createStore(feedReducer);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
