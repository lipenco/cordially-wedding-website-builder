import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing.jsx';
import config from '../../data/SiteConfig';
import Landing from '../components/Landing/Landing.jsx';

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle}>
        <base target="_blank" href="http://cordially.co" />
        <meta name="description" content={`Create best wedding website with top wedding websites creator Coridally`} />
        </Helmet>
        <Landing/>
      </div>
    );
  }
}

export default Index;
