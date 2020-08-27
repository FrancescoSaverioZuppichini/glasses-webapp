import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme.js'
import { Box } from 'theme-ui'

function App() {
  return (
    <ThemeProvider theme={theme}>
    
    <Box variant='app'>
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </Box>
    </ThemeProvider>
  );
}

export default App;
