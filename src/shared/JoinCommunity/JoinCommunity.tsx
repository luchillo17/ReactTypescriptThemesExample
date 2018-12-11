import './JoinCommunity.scss';

import {
  Grid,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import React, { Component } from 'react';
import classNames from 'classnames';

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
});

interface JoinCommunityProps extends Partial<WithStyles<typeof styles>> {
  onMouseDownButtonClick: () => void;
}

@(withStyles(styles) as any)
export class JoinCommunity extends Component<JoinCommunityProps> {
  state = {};

  render() {
    return (
      <Grid
        container
        className={classNames('JoinCommunity', this.props.classes!.root)}
        justify='center'
      >
        <Typography id='JoinCatchPhraseTitle' variant='h4' align='center'>
          Join our <img id='JoinMap' src='images/globe.png' /> global{' '}
          <img id='JoinChatBubble' src='images/chat-txt.png' /> ...community
        </Typography>

        <Typography
          id='JoinDescriptionSubtitle'
          variant='subtitle1'
          align='center'
        >
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
