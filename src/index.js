import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
impo

import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>      
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

