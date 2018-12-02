import './App.scss';

import {
  AppBar,
  Button,
  CssBaseline,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ExpandMore, Menu } from '@material-ui/icons';
import React, { Component } from 'react';

import { themes } from './theme/theme';

class App extends Component {
  state = {
    dark: false,
    theme: themes.original,
  };

  changeTheme = () => {
    this.setState({
      dark: !this.state.dark,
      theme: this.state.dark ? themes.original : themes.originalDark,
    });
  };

  render() {
    return (
      <>
        <MuiThemeProvider theme={this.state.theme}>
          <CssBaseline />
          <AppBar position='static'>
            <Toolbar>
              <IconButton color='inherit' aria-label='Menu'>
                <Menu />
              </IconButton>
              <Typography variant='h6' color='inherit'>
                News
              </Typography>
              <Button color='inherit'>Login</Button>
            </Toolbar>
          </AppBar>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Button
            variant='contained'
            color='primary'
            onClick={this.changeTheme}
          >
            Switch theme dark
          </Button>
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
