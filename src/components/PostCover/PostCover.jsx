import React, { Component } from "react";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { postNode, mobile } = this.props;
    const post = postNode.frontmatter;
    /* eslint no-undef: "off"*/
    const cover = post.cover.startsWith("/")
      ? __PATH_PREFIX__ + post.cover
      : post.cover;
    const coverHeight = mobile ? 280 : 450;
    return (
      <div
        style={{ backgroundImage: `url(${cover})`, height: `${coverHeight}px` }}
        className="md-grid md-cell--10 post-cover"
      />
    );
  }
}

export default PostCover;
