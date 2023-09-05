import React from 'react';
import './index.css';
import { Provider } from './providers';
import { Routing } from 'pages';

const App = () => {
  return (
    <Provider>
      <Routing />
    </Provider>
  );
}

export default App;
