import './Footer.scss';

import {
  Button,
  Grid,
  Paper,
  TextField,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import React, { Component } from 'react';

const styles = (theme: Theme) => ({
  textFieldBg: {
    background: theme.palette.background.default,
  },
  logoImage: {
    [theme.breakpoints.down('sm')]: {
      height: '60px!important',
    },
    [theme.breakpoints.down('xs')]: {
      height: '30px!important',
    },
  },
});

interface FooterProps extends Partial<WithStyles<typeof styles>> {}

@(withStyles(styles) as any)
export class Footer extends Component<FooterProps, {}> {
  static footerImages = [
    'images/circle-1.png',
    'images/pro-h.png',
    'images/twitter.png',
    'images/m.png',
    'images/slack-logo.png',
  ];

  getLogosGrid() {
    return (
      <Grid id='LogosGrid' container justify='center'>
        <Grid item container spacing={16} justify='space-around' wrap='nowrap'>
          {Footer.footerImages.map((src, index) => (
            <img
              key={index}
              className={this.props.classes!.logoImage}
              src={src}
            />
          ))}
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Grid className='Footer' container direction='column'>
        <Paper id='FooterPaper' square>
          {this.getLogosGrid()}
        </Paper>

        <Paper id='FooterSignup' square>
          <Grid container direction='column' spacing={24}>
            <Grid item>
              <Typography variant='subtitle1' align='center'>
                <span style={{ fontWeight: 'bold' }}>Receive our</span>
                💌 interesting news letters
              </Typography>
            </Grid>

            <Grid id='NewsLetterEmailForm' container item justify='center'>
              <form>
                <TextField
                  id='NewsLetterEmail'
                  className={this.props.classes!.textFieldBg}
                  margin='none'
                  placeholder='Your email here'
                  variant='outlined'
                />

                <Button variant='contained' color='secondary'>
                  Sign me up!
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default Footer;
