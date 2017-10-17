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
  }

  NavList.push({ divider: true });

  NavList.push(
    {
      divider: false,
      subheader: false,
      primaryText: 'Greenery Wedding Website Template',
      component: Link,
      to: '/all-about-a-greenery-wedding-theme',
    },
    {
      divider: false,
      subheader: false,
      primaryText: 'Best Wedding Website Builder',
      component: Link,
      to: '/meet-truly-personal-wedding-website-builder',
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
    }
  );
  return NavList;
}
export default GetNavList;
