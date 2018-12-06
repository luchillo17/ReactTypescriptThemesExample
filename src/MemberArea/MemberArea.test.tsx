import React from 'react';
import ReactDOM from 'react-dom';
import MemberArea from './MemberArea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemberArea />, div);
});
