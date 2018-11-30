import './App.scss';

import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button/Button';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import logo from './logo.svg';
import { themes } from './theme/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
          </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
          </a>
            <Button primary={true}>Styled button</Button>
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
