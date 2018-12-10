import './LandingPage.scss';

import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react';

import { Footer, Header, JoinCommunity } from '../shared';
import { DescriptionSection } from './DescriptionSection';
import { ContentLadderSection } from './ContentLadderSection';

export class LandingPage extends Component {
  state = {};

  onMouseDownButtonClick = () => {};

  render() {
    return (
      <div className='LandingPage'>
        <Header />

        <JoinCommunity onMouseDownButtonClick={this.onMouseDownButtonClick}>
          <Grid container justify='center'>
            <Button variant='contained' color='primary'>
              Become a Fellow
            </Button>
          </Grid>
        </JoinCommunity>

        <DescriptionSection />

        <ContentLadderSection />

        <Footer />
      </div>
    );
  }
}

export default LandingPage;
