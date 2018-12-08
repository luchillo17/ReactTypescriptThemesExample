import React, { Component } from 'react';
import './JoinCommunity.scss';
import { Typography, Grid } from '@material-ui/core';

export interface JoinCommunityProps {
  onMouseDownButtonClick: () => void;
}

export class JoinCommunity extends Component<JoinCommunityProps> {
  state = {};

  render() {
    return (
      <Grid container className='JoinCommunity' justify='center'>
        <Typography id='JoinCatchPhraseTitle' variant='h4'>
          Join our <img id='JoinMap' src='images/globe.png' /> global{' '}
          <img id='JoinChatBubble' src='images/chat-txt.png' /> ...community
        </Typography>

        <Typography id='JoinDescriptionSubtitle' variant='subtitle1'>
          <img id='JoinSmilyGlasses' src='images/smily.png' />
          Smart Community for startups, entrepreneurs, everyone to learn, share
          their knowledge and build their career
        </Typography>

        {this.props.children}

        <Typography id='JoinPriceSubtitle' variant='subtitle2'>
          We charge a $27 one time membership for access to Fellows Chat
        </Typography>

        <Grid
          id='JoinScrollIcon'
          container
          item
          direction='column'
          alignItems='center'
        >
          <img src='images/mouse.svg' />
          <img src='images/arrow_down.svg' />
        </Grid>
      </Grid>
    );
  }
}

export default JoinCommunity;
