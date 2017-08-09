import React from 'react';
// import './style/main.scss';
import io from './lib/io.js';
import ReactDom from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import storeCreate from './lib/store-create';

import userSubscribers from './subscribe/user.js';
import messageSubscribers from './subscribe/message.js';

const store = storeCreate();

let subscribers = Object.assign(userSubscribers, messageSubscribers);

io(store, subscribers);

let AppContainer = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDom.render( <AppContainer/> , document.getElementById('root'));
