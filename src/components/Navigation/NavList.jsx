import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';

function GetNavList(config) {
  const NavList = [{
    divider: false,
    subheader: false,
    primaryText: 'Home',
    component: Link,
    to: '/',
  },
  {
    divider: false,
    subheader: false,
    primaryText: "Login",
    to: '/admin/login'
  },
  {
    divider: false,
    subheader: false,
    primaryText: "Sign Up",
    to: '/admin/register'
  },
  {
    divider: false,
    subheader: false,
    primaryText: "Build your website",
    to: '/template/vintage'
  },
  {
    divider: true,
  }
  ];


  NavList.push(
    {
      divider: false,
      subheader: false,
      primaryText: 'Greenery Template',
      component: Link,
      to: '/template/greenery'
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Vintage Template',
      component: Link,
      to: '/template/vintage'
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Modern Template',
      component: Link,
      to: '/template/modern'
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Rustic Template',
      component: Link,
      to: '/template/rustic'
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Romantic Template',
      component: Link,
      to: '/template/romantic'
    },
    {
      divider: true,
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Pricing',
      component: Link,
      to: '/wedding-website-builder-pricing/',
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'About',
      component: Link,
      to: '/wedding-website-builder-about/',
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'See All Themes',
      component: Link,
      to: '/wedding-website-themes/'
    },
    {
      divider: false,
      subheader: false,
      primaryText: "Our blog",
      to: "/blog/",
    }
  );
  return NavList;
}
export default GetNavList;
