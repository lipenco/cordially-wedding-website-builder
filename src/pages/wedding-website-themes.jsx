import React, { Component } from 'react';
import Helmet from 'react-helmet';
import About from '../components/About/About.jsx';
import config from '../../data/SiteConfig';
import AllThemes from '../components/AllThemes/all-themes.jsx';

class ThemesPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Cordially Wedding Website Builder | ${config.siteTitle}`} />
        <AllThemes />
      </div>
    );
  }
}

export default ThemesPage;
