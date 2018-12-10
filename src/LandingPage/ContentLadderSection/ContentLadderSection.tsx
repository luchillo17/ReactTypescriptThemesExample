import './ContentLadderSection.scss';

import React, { Component } from 'react';
import {
  Grid,
  Theme,
  WithStyles,
  withStyles,
  Typography,
} from '@material-ui/core';
import { ContentLadderItem } from './ContentLadderItem';
import classNames from 'classnames';

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
    },
  },
  olympicContainer: {
    [theme.breakpoints.up('sm')]: {
      'margin-top': '-100px',
    },
    [theme.breakpoints.down('sm')]: {
      'padding-top': '10px',
    },
  },
});

interface ContentLadderSectionProps
  extends Partial<WithStyles<typeof styles>> {}

@(withStyles(styles) as any)
export class ContentLadderSection extends Component<ContentLadderSectionProps> {
  render() {
    return (
      <Grid
        className={classNames('ContentLaderSection', this.props.classes!.root)}
        container
      >
        {this.renderTopLadderItems()}
        {this.renderBottomImages()}
      </Grid>
    );
  }

  renderTopLadderItems() {
    return (
      <>
        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems='center'
          justify='center'
        >
          <img src='images/newspaper.png' />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ContentLadderItem
            imgSrc='images/channel.png'
            title='24/7 News in our channels'
            text="We love to learn about new things, technology is improving daily and you reallly don't want to become a fool..."
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ContentLadderItem
            imgSrc='images/im1.png'
            title='Startup Support'
            text='Fellows.chat Team are helping and supporting Startups, with Legal support and Business Development support!'
          />
        </Grid>

        <Grid item xs={false} sm={6} />

        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems='center'
          justify='center'
        >
          <img src='images/sticker.png' />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ContentLadderItem
            imgSrc='images/slack.png'
            title='We have many software development Channels
'
            text='You still searching a team? Or you like to learn some new code? We have many software development channels. #Javascript, #PHP, #FrontEnd #BackEnd etc...'
          />
        </Grid>
      </>
    );
  }

  renderBottomImages() {
    return (
      <>
        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems='center'
          justify='center'
        >
          <img src='images/chat.png' />
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems='flex-start'
          justify='center'
        >
          <img src='images/android.png' />
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems='center'
          justify='center'
        >
          <img src='images/winner.png' />
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={6}
          alignItems='center'
          justify='center'
        >
          <img src='images/code.png' />
          <Typography variant='subtitle1' gutterBottom>
            The code Competition is powered by BerryNodes LTD
          </Typography>
        </Grid>

        <Grid
          className={this.props.classes!.olympicContainer}
          item
          container
          xs={12}
          sm={6}
          alignItems='center'
          justify='center'
        >
          <img src='images/olympic.png' />
        </Grid>
      </>
    );
  }
}

export default ContentLadderSection;
