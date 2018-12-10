import React from 'react';
import ReactDOM from 'react-dom';
import ContentLadderSection from './ContentLadderSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentLadderSection />, div);
});
