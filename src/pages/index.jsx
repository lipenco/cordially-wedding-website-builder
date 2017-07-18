import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing.jsx';
import config from '../../data/SiteConfig';
import Landing from '../components/Landing/Landing.jsx';

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Landing/>
      </div>
    );
  }
}

export default Index;
