import React, { Component } from "react";
import {  ShareCounts, generateShareIcon,  FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    FacebookShareCount,
    GooglePlusShareCount,
    RedditShareCount,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    LinkedinIcon,
    RedditIcon,
    RedditShareButton } from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteUrl + config.pathPrefix + postPath;

    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");

    return (
      <div className="social-links">
        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count =>
              <div className="share-count">
                {filter(count)}
              </div>}
          </RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          title={post.title}
          picture={post.cover}
          description={postNode.excerpt}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count =>
              <div className="share-count">
                {filter(count)}
              </div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    );
  }
}

export default SocialLinks;
