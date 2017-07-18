import React from 'react';
import Helmet from 'react-helmet';
import PostListing from '../components/PostListing/PostListing.jsx';
import config from '../../data/SiteConfig';

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={`Cordially Wedding Website Blog | ${config.siteTitle}`}  />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Blog;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogQuery {
  allMarkdownRemark(
      limit: 2000,
      sort: { fields: [frontmatter___date], order: DESC },
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
}
`;
