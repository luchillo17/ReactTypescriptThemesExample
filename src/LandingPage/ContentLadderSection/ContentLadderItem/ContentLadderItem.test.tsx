import React from 'react';
import ReactDOM from 'react-dom';
import ContentLadderItem from './ContentLadderItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ContentLadderItem
      imgSrc='images/channel.png'
      title='24/7 News in our channels'
      text="We love to learn about new things, technology is improving daily and you reallly don't want to become a fool..."
    />,
    div,
  );
});
