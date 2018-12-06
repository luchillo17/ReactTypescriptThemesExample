import './App.scss';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { LandingPage } from './LandingPage';
import { MemberArea } from './MemberArea';
import { themes } from './theme/theme';

class App extends Component {
  state = {
    dark: true,
    theme: themes.originalDark,
  };

  changeTheme = () => {
    const dark = !this.state.dark;
    this.setState({
      dark,
      theme: dark ? themes.originalDark : themes.original,
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <MuiThemeProvider theme={this.state.theme}>
            <CssBaseline />

            <Route path='/' exact component={LandingPage} />
            <Route path='/member-area' component={MemberArea} />
          </MuiThemeProvider>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
