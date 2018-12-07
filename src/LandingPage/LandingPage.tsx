import React, { Component } from 'react';
import { Header } from './Header';
import './LandingPage.scss';

export class LandingPage extends Component {
  state = {};

  render() {
    return (
      <div className='LandingPage'>
        <Header />
      </div>
    );
  }
}

export default LandingPage;
