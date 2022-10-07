import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from 'components/CastomHook/Provider';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Phonebook } from 'components/App';
import { theme } from 'Thema';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <UserProvider>
          <Phonebook />
        </UserProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
