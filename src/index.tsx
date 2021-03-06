import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux';
import {store} from "./store";
import {worker} from "./mocks/browser";

if (process.env.NODE_ENV === 'development') {
    worker.start()
}

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>,
  document.querySelector('#root'),
);
