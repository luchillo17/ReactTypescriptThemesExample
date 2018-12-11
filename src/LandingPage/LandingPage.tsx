import './LandingPage.scss';

import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react';

import { Footer, Header, JoinCommunity } from '../shared';
import { DescriptionSection } from './DescriptionSection';
import { ContentLadderSection } from './ContentLadderSection';
import { relative } from 'path';

export class LandingPage extends Component {
  state = {};

  onMouseDownButtonClick = () => {};

  render() {
    return (
      <Grid
        className='LandingPage'
        container
        direction='column'
        alignItems='center'
      >
        <Header />

        <JoinCommunity onMouseDownButtonClick={this.onMouseDownButtonClick}>
          <Grid container justify='center'>
            <Button variant='contained' color='primary'>
              Become a Fellow
            </Button>
          </Grid>
        </JoinCommunity>

        <Grid
          id='BGMoonContainer'
          container
          item
          justify='center'
          style={{ position: 'relative' }}
        >
          <img id='BGMoon' src='images/BGMoon.svg' />
        </Grid>

        <DescriptionSection />

        <ContentLadderSection />

        <Footer />
      </Grid>
    );
  }
}

export default LandingPage;
