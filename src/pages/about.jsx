import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About.jsx';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About Cordially Wedding Website Builder | About`} />
        <About />
      </div>
    );
  }
}

export default AboutPage;