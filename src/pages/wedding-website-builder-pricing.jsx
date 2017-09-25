import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About.jsx';
import config from '../../data/SiteConfig';
import Pricing from '../components/Pricing/Pricing.jsx';

class PricingPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Cordially Wedding Website Builder | ${config.siteTitle}`} />
        <Pricing />
      </div>
    );
  }
}

export default PricingPage;
