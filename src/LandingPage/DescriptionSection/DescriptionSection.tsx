import './DescriptionSection.scss';

import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

export class DescriptionSection extends Component {
  state = {};

  render() {
    return (
      <Grid
        id='DescriptionSection'
        container
        direction='column'
        alignItems='center'
      >
        <Grid item>
          <img src='images/main-scr.png' />
        </Grid>

        <Grid item>
          <Typography
            id='DescriptionTitle'
            variant='h5'
            align='center'
            gutterBottom
          >
            <img src='images/think.png' /> Why the name fellows.chat?
          </Typography>

          <Typography id='DescriptionText' variant='subtitle1' align='center'>
            A fellow is a member of a group (or fellowship) that work together
            in pursuing mutual knowledge or practice There are many different
            kinds of fellowships which are awarded for different reasons in
            academia and industry, often indicating an advanced level of
            scholarship.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default DescriptionSection;
