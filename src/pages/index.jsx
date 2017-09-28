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
        <meta name="description" content={`
          Create truly one-of-the-kind wedding website and make your guests feel special.
          Collect RSVPs and manage your guests list with the best wedding website creator.`
        } />
        </Helmet>
        <Landing/>
      </div>
    );
  }
}

export default Index;
