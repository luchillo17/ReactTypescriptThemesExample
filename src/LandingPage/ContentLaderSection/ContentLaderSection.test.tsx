import React from 'react';
import ReactDOM from 'react-dom';
import ContentLaderSection from './ContentLaderSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContentLaderSection />, div);
});
