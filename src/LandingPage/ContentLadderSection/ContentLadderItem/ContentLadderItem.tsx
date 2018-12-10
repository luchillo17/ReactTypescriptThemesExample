import './ContentLadderItem.scss';

import { Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import classNames from 'classnames';

const styles = (theme: Theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '10px 0',
    },
  },
});

interface ContentLadderItemProps extends Partial<WithStyles<typeof styles>> {
  imgSrc: string;
  title: string;
  text: string;
}

@(withStyles(styles) as any)
export class ContentLadderItem extends Component<ContentLadderItemProps> {
  render() {
    const { imgSrc, title, text, classes } = this.props;
    return (
      <div className={classNames('ContentLadderItem', classes!.root)}>
        <img src={imgSrc} alt='' />

        <Typography variant='h5' align='center' gutterBottom>
          {title}
        </Typography>

        <Typography variant='subtitle1' align='center' gutterBottom>
          {text}
        </Typography>
      </div>
    );
  }
}

export default ContentLadderItem;
