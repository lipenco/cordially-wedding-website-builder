import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class HiringPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet>
          <title>{`About Cordially Wedding Website Builder | About`}</title>
          <link rel="canonical" href={`${config.siteUrl}/about/`} />
        </Helmet>
        <Hiring />
      </div>
    );
  }
}

export default HiringPage;
