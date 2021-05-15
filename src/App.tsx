import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import AppRouter from './routes/AppRouter';
import { store } from './store';

function App() {
  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  );
}

export default App;
