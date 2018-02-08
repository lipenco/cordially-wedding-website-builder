import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Link from 'gatsby-link';

function GetNavList(config) {
  const NavList = [
    {
    divider: false,
    subheader: false,
    primaryText: '',
    component: Link,
    to: '/',
  },
    {
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
    onClick() { window.location.href = 'https://www.cordially.co/admin/login'; },

  },
  {
    divider: false,
    subheader: false,
    primaryText: "Sign Up",
    onClick() { window.location.href = 'https://www.cordially.co/admin/register'; },

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
      onClick() { window.location.href = 'https://www.cordially.co/template/greenery'; }
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Vintage Template',
      component: Link,
      onClick() { window.location.href = 'https://www.cordially.co/template/vintage'; }
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Secret Garden',
      component: Link,
      onClick() { window.location.href = 'https://www.cordially.co/template/secret-garden'; }
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Modern Template',
      component: Link,
      onClick() { window.location.href = 'https://www.cordially.co/template/modern'; }
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Rustic Template',
      component: Link,
      onClick() { window.location.href = 'https://www.cordially.co/template/rustic'; }
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Romantic Template',
      component: Link,
      onClick() { window.location.href = 'https://www.cordially.co/template/romantic'; }
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
      onClick() { window.location.href = 'https://www.cordially.co/blog'; }
    }
  );
  return NavList;
}
export default GetNavList;
