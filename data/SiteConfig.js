module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: 'Cordially. Wedding Website Builder and Top RSVP Website Creator', // Site title.
  siteTitleAlt: "Boutique Wedding Website Builder", // Alternative site title for SEO.
  siteLogo: "/img/favicons/ms-icon-310x310.png", // Logo used for SEO and manifest.
  siteUrl: "http://cordially.co", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "Build and create a beautiful, one-of-a-kind wedding website invitation and collect RSVPs", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "10214332377725883", // FB Application ID for using app insights
  siteGATrackingID: "UA-84206959-1", // Tracking code ID for google analytics.
  disqusShortname: 'cordially-co', // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Cordially", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "NYC", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/cordially.co',
      iconClassName: 'fa fa-facebook',
    },
    {
      label: 'Pinterest',
      url: 'https://www.pinterest.com/cordiallyco/',
      iconClassName: 'fa fa-pinterest',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/cordially.co/',
      iconClassName: 'fa fa-instagram',
    }
  ],
  copyright: "Copyright © 2017. Cordially.co" // Copyright string for the footer of the website and RSS feed.
};
