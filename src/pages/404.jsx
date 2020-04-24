import React, { Component } from "react";
import Helmet from "react-helmet";
import Landing from '../components/Landing/Landing.jsx';
import config from "../../data/SiteConfig";

class NotFound extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={config.siteTitle}>
          <title>{`About Cordially Wedding Website Builder | About`}</title>
        </Helmet>
        <Landing />
      </div>
    );
  }
}

export default NotFound;
