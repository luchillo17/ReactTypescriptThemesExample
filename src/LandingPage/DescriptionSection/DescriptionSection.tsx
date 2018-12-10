import './DescriptionSection.scss';

import {
  Grid,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import React, { Component } from 'react';

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
});

interface DescriptionSectionProps extends Partial<WithStyles<typeof styles>> {}

@(withStyles(styles) as any)
export class DescriptionSection extends Component<DescriptionSectionProps> {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classNames('DescriptionSection', classes!.root)}
        alignItems='center'
        container
        direction='column'
      >
        <Grid item>
          <img src='images/main-scr.png' />
        </Grid>

        <Grid item>
          <Typography
            id='DescriptionTitle'
            align='center'
            gutterBottom
            variant='h5'
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
