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
    onClick() { window.location.href = 'https://app.cordially.co/admin/login'; },
  },
  {
    divider: false,
    subheader: false,
    primaryText: "Sign Up",
    onClick() { window.location.href = 'https://app.cordially.co/admin/register'; },
  },
  {
    divider: false,
    subheader: false,
    primaryText: "Build your website",
    onClick() { window.location.href = 'https://app.cordially.co/template/vintage'; },
  },
  {
    divider: true,
  }
  ];

  if (config.userLinks) {
    config.userLinks.forEach((link) => {
      NavList.push(
        {
          divider: false,
          subheader: false,
          primaryText: link.label,
          onClick() { window.location.href = link.url; },
        }
      );
    });
    NavList.push(
      {
        divider: false,
        subheader: false,
        primaryText: "Our blog",
        to: "/blog",
      }
    );
  }

  NavList.push({ divider: true });

  NavList.push(
    {
      divider: false,
      subheader: false,
      primaryText: 'Preview Greenery Theme',
      component: Link,
      onClick() { window.location.href = 'http://app.cordially.co/template/greenery'; },
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Preview Vintage Theme',
      component: Link,
      onClick() { window.location.href = 'http://app.cordially.co/template/vintage'; },
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Preview Modern Theme',
      component: Link,
      onClick() { window.location.href = 'http://app.cordially.co/template/modern'; },
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Preview Rustic Theme',
      component: Link,
      onClick() { window.location.href = 'http://app.cordially.co/template/rustic'; },
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Preview Romantic Theme',
      component: Link,
      onClick() { window.location.href = 'http://app.cordially.co/template/romantic'; },
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
      primaryText: 'All Themes',
      component: Link,
      to: '/wedding-website-themes/'
    }
  );
  return NavList;
}
export default GetNavList;
