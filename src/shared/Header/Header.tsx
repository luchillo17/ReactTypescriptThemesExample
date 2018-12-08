import './Header.scss';

import { Grid, Typography, withWidth } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import React, { Component, ReactNode } from 'react';

export interface HeaderProps extends Partial<WithWidth> {}

@(withWidth as any)()
export class Header extends Component<HeaderProps, {}> {
  state = {};

  render(): ReactNode {
    const { width } = this.props;
    const justifyCenterXS = {
      ...(width === 'xs' && { justify: 'center' }),
    };
    // this.props
    return (
      <Grid container className='Header'>
        <Grid container item xs={12} sm={6} {...justifyCenterXS}>
          <img id='HeaderLogo' src='images/Logo.svg' />
        </Grid>
        <Grid
          alignItems='center'
          container
          item
          justify='flex-end'
          wrap='nowrap'
          sm={6}
          xs={12}
          {...justifyCenterXS}
        >
          <img id='HeaderCat' src='images/cat.png' />
          <Typography variant='subtitle1'>
            We are Cats Lovers, 14 Fellows members
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
