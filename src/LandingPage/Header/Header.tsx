import './Header.scss';

import {
  Grid,
  Typography,
  WithTheme,
  withTheme,
  withWidth,
} from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import React, { Component, ReactNode } from 'react';

export interface HeaderProps extends Partial<WithWidth> {} // Partial<WithTheme>

@(withWidth as any)()
// @(withTheme as any)()
export class Header extends Component<HeaderProps, {}> {
  state = {};

  render(): ReactNode {
    console.log('Re-render');

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
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          justify='flex-end'
          wrap='nowrap'
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
// ),
// );

export default Header;
