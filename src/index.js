import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from './resources/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <CSSReset/>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

