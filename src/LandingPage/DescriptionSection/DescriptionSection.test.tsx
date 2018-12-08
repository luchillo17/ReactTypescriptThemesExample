import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionSection from './DescriptionSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DescriptionSection />, div);
});
