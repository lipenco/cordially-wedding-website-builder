import React from 'react';
import './Landing.scss';
import Helmet from 'react-helmet';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


class Landing extends React.Component {

  componentDidMount() {
     const script = document.createElement("script");
     script.src = "cordially-landing-optimized.js";
     script.async = true;

     document.body.appendChild(script);

     var elements = document.getElementsByClassName('txt-rotate');
     for (var i=0; i<elements.length; i++) {
       var toRotate = elements[i].getAttribute('data-rotate');
       var period = elements[i].getAttribute('data-period');
       if (toRotate) {
         new TxtRotate(elements[i], JSON.parse(toRotate), period);
       }
     }
 }

  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        focusOnSelect:true,
        autoplay: true,
        responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }, { breakpoint: 1024, settings: { slidesToShow: 3 } } ]
    };


    return (
      <div>
        <Helmet title={`Cordially - Boutique Wedding Website Creator.`}>
        <meta property="og:site_name" content="Cordially.co"/>
        <meta name="description" content="Build your wedding website with love. Collect wedding RSVPs online and choose from modern wedding websites templates designed by Cordially - the best wedding website builder."/>
        <meta content="https://www.cordially.co/img/cordially-logo-new.jpg" property="og:image"/>
        <meta content="https://www.cordially.co/img/cordially-logo-new.jpg" property="og:image:url"/>
        <meta content="image/jpeg" property="og:image:type"/>
        <link rel="canonical" href="https://www.cordially.co" />
        </Helmet>

        <div className="usual-nav" />
        <div className="preloader">
          <div className="gradient-wrapper">
            <div className="gradient-loader" />
          </div>
          <div className="half-screen" />
        </div>
        <div className="wrapper-content">
          <div className="shapes one">
            <svg className="shape triangle big" width="100%" height="100%" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
            style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="#fff" d="M28.496,6.034c-1.282,-3.708 -5.327,-5.674 -9.034,-4.393c-3.708,1.282 -5.675,5.327 -4.393,9.035l2.321,6.713l6.713,-2.321c3.708,-1.281 5.675,-5.326 4.393,-9.034Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M33.138,19.462c1.282,3.708 -0.685,7.753 -4.393,9.034c-3.708,1.282 -7.752,-0.684 -9.034,-4.392l-2.321,-6.714l6.714,-2.321c3.707,-1.281 7.752,0.685 9.034,4.393Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M1.642,15.318c-1.282,-3.708 0.685,-7.753 4.393,-9.034c3.707,-1.282 7.752,0.684 9.034,4.392l2.321,6.714l-6.714,2.321c-3.707,1.281 -7.752,-0.685 -9.034,-4.393Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M6.284,28.745c1.282,3.708 5.327,5.674 9.034,4.393c3.708,-1.282 5.675,-5.327 4.393,-9.035l-2.321,-6.713l-6.713,2.321c-3.708,1.281 -5.675,5.326 -4.393,9.034Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M21.529,14.368c-1.093,2.249 -4.139,3.022 -4.139,3.022c0,0 -1.272,-2.873 -0.179,-5.122c1.093,-2.248 4.138,-3.021 4.138,-3.021c0,0 1.273,2.872 0.18,5.121Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M17.569,22.511c-1.093,2.249 -4.139,3.022 -4.139,3.022c0,0 -1.272,-2.873 -0.179,-5.122c1.093,-2.248 4.138,-3.021 4.138,-3.021c0,0 1.273,2.872 0.18,5.121Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M20.412,21.528c-2.249,-1.093 -3.022,-4.139 -3.022,-4.139c0,0 2.873,-1.272 5.122,-0.179c2.248,1.093 3.021,4.138 3.021,4.138c0,0 -2.872,1.273 -5.121,0.18Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M12.269,17.569c-2.249,-1.093 -3.022,-4.139 -3.022,-4.139c0,0 2.873,-1.272 5.122,-0.179c2.248,1.093 3.021,4.138 3.021,4.138c0,0 -2.872,1.273 -5.121,0.18Z" style={{strokeWidth: '0.5px'}}/>
            </svg>
            <svg className="shape circle" width="100%" height="100%" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
              style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="#fff" d="M22.658,12.235c-3.527,2.679 -8.958,1.464 -8.958,1.464c0,0 0.287,-5.558 3.813,-8.237c3.527,-2.679 8.959,-1.464 8.959,-1.464c0,0 -0.287,5.558 -3.814,8.237Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M9.886,21.937c-3.527,2.679 -8.958,1.464 -8.958,1.464c0,0 0.287,-5.558 3.813,-8.237c3.527,-2.679 8.959,-1.464 8.959,-1.464c0,0 -0.287,5.558 -3.814,8.237Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M15.164,22.658c-2.679,-3.527 -1.464,-8.958 -1.464,-8.958c0,0 5.558,0.287 8.237,3.813c2.679,3.527 1.464,8.959 1.464,8.959c0,0 -5.558,-0.287 -8.237,-3.814Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M5.462,9.886c-2.678,-3.527 -1.464,-8.958 -1.464,-8.958c0,0 5.559,0.287 8.238,3.813c2.678,3.527 1.463,8.959 1.463,8.959c0,0 -5.558,-0.287 -8.237,-3.814Z" style={{strokeWidth: '0.5px'}}/>
            </svg>
            <svg className="shape diamond" width="100%" height="100%" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
              style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="#fff" d="M15.29,3.046c-0.996,-1.922 -3.361,-2.673 -5.283,-1.678c-1.922,0.996 -2.673,3.361 -1.678,5.284l1.803,3.48l3.481,-1.803c1.922,-0.996 2.673,-3.361 1.677,-5.283Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M18.895,10.006c0.996,1.922 0.245,4.287 -1.678,5.283c-1.922,0.996 -4.287,0.245 -5.283,-1.677l-1.802,-3.481l3.48,-1.803c1.922,-0.995 4.287,-0.244 5.283,1.678Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M1.368,10.257c-0.996,-1.922 -0.245,-4.287 1.678,-5.283c1.922,-0.996 4.287,-0.245 5.283,1.677l1.802,3.481l-3.48,1.803c-1.922,0.995 -4.287,0.244 -5.283,-1.678Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M4.974,17.218c0.996,1.922 3.361,2.673 5.283,1.678c1.922,-0.996 2.673,-3.361 1.678,-5.284l-1.803,-3.48l-3.481,1.803c-1.922,0.996 -2.673,3.361 -1.677,5.283Z" style={{strokeWidth: '0.5px'}}/>
            </svg>
            {/* <svg class="shape waves" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30">
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,23.651 c1.092,0,1.55-0.52,2.241-1.308c0.828-0.941,1.861-2.11,4.101-2.07c0.043-0.002,0.087-0.003,0.13-0.003 c2.163,0,3.171,1.148,3.985,2.073c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.006,0.157,0.013 c0.051-0.007,0.104-0.013,0.157-0.013c1.093,0,1.55-0.52,2.241-1.308c0.828-0.941,1.86-2.11,4.101-2.07 c0.044-0.002,0.087-0.003,0.129-0.003c2.163,0,3.173,1.148,3.986,2.073c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,16.684 c1.092,0,1.55-0.521,2.241-1.308c0.828-0.941,1.861-2.111,4.101-2.071c0.043,0,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.148,3.985,2.072c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.005,0.157,0.012 c0.051-0.007,0.104-0.012,0.157-0.012c1.093,0,1.55-0.521,2.241-1.308c0.828-0.941,1.86-2.111,4.101-2.071 c0.044,0,0.087-0.001,0.129-0.001c2.163,0,3.173,1.148,3.986,2.072c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,9.714 c1.092,0,1.55-0.519,2.241-1.307c0.828-0.941,1.861-2.111,4.101-2.071c0.043-0.001,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.147,3.985,2.072c0.692,0.788,1.149,1.307,2.241,1.307c0.054,0,0.106,0.006,0.157,0.014 c0.051-0.007,0.104-0.014,0.157-0.014c1.093,0,1.55-0.519,2.241-1.307c0.828-0.941,1.86-2.111,4.101-2.071 c0.044-0.001,0.087-0.001,0.129-0.001c2.163,0,3.173,1.147,3.986,2.072c0.691,0.788,1.148,1.307,2.241,1.307"/>
               </svg> */}
            <svg className="shape waves" width="100%" height="100%" viewBox="0 0 15 28" version="1.1" xmlns="http://www.w3.org/2000/svg"
            style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="none" d="M10.129,9.45c2.123,4.526 -1.16,7.87 -1.16,7.87c0,0 -4.669,0.386 -6.792,-4.14c-2.124,-4.527 -0.896,-12.252 -0.896,-12.252c0,0 6.725,3.996 8.848,8.522Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="none" d="M1.281,0.928l11.941,25.458" style={{strokeWidth: '0.5px'}}/>
            </svg>
            <svg className="shape hexa" width="100%" height="100%" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg"
              style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="none" d="M6.709,0.928c-1.607,1.608 -4.174,1.63 -5.781,0.022c1.607,1.608 1.607,4.152 0,5.759c1.607,-1.607 4.173,-1.585 5.781,0.021c-1.608,-1.606 -1.607,-4.194 0,-5.802Z" style={{strokeWidth: '0.3px'}}/>
            </svg>
            <svg className="shape triangle small" width="100%" height="100%" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
            style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="#fff" d="M28.496,6.034c-1.282,-3.708 -5.327,-5.674 -9.034,-4.393c-3.708,1.282 -5.675,5.327 -4.393,9.035l2.321,6.713l6.713,-2.321c3.708,-1.281 5.675,-5.326 4.393,-9.034Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M33.138,19.462c1.282,3.708 -0.685,7.753 -4.393,9.034c-3.708,1.282 -7.752,-0.684 -9.034,-4.392l-2.321,-6.714l6.714,-2.321c3.707,-1.281 7.752,0.685 9.034,4.393Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M1.642,15.318c-1.282,-3.708 0.685,-7.753 4.393,-9.034c3.707,-1.282 7.752,0.684 9.034,4.392l2.321,6.714l-6.714,2.321c-3.707,1.281 -7.752,-0.685 -9.034,-4.393Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M6.284,28.745c1.282,3.708 5.327,5.674 9.034,4.393c3.708,-1.282 5.675,-5.327 4.393,-9.035l-2.321,-6.713l-6.713,2.321c-3.708,1.281 -5.675,5.326 -4.393,9.034Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M21.529,14.368c-1.093,2.249 -4.139,3.022 -4.139,3.022c0,0 -1.272,-2.873 -0.179,-5.122c1.093,-2.248 4.138,-3.021 4.138,-3.021c0,0 1.273,2.872 0.18,5.121Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M17.569,22.511c-1.093,2.249 -4.139,3.022 -4.139,3.022c0,0 -1.272,-2.873 -0.179,-5.122c1.093,-2.248 4.138,-3.021 4.138,-3.021c0,0 1.273,2.872 0.18,5.121Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M20.412,21.528c-2.249,-1.093 -3.022,-4.139 -3.022,-4.139c0,0 2.873,-1.272 5.122,-0.179c2.248,1.093 3.021,4.138 3.021,4.138c0,0 -2.872,1.273 -5.121,0.18Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M12.269,17.569c-2.249,-1.093 -3.022,-4.139 -3.022,-4.139c0,0 2.873,-1.272 5.122,-0.179c2.248,1.093 3.021,4.138 3.021,4.138c0,0 -2.872,1.273 -5.121,0.18Z" style={{strokeWidth: '0.5px'}}/>
            </svg>
            <svg className="shape circle small" width="100%" height="100%" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
              style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
              <path fill="#fff" d="M22.658,12.235c-3.527,2.679 -8.958,1.464 -8.958,1.464c0,0 0.287,-5.558 3.813,-8.237c3.527,-2.679 8.959,-1.464 8.959,-1.464c0,0 -0.287,5.558 -3.814,8.237Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M9.886,21.937c-3.527,2.679 -8.958,1.464 -8.958,1.464c0,0 0.287,-5.558 3.813,-8.237c3.527,-2.679 8.959,-1.464 8.959,-1.464c0,0 -0.287,5.558 -3.814,8.237Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M15.164,22.658c-2.679,-3.527 -1.464,-8.958 -1.464,-8.958c0,0 5.558,0.287 8.237,3.813c2.679,3.527 1.464,8.959 1.464,8.959c0,0 -5.558,-0.287 -8.237,-3.814Z" style={{strokeWidth: '0.5px'}}/>
              <path fill="#fff" d="M5.462,9.886c-2.678,-3.527 -1.464,-8.958 -1.464,-8.958c0,0 5.559,0.287 8.238,3.813c2.678,3.527 1.463,8.959 1.463,8.959c0,0 -5.558,-0.287 -8.237,-3.814Z" style={{strokeWidth: '0.5px'}}/>
            </svg>
            {/* <svg class="shape waves small" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" >
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,23.651 c1.092,0,1.55-0.52,2.241-1.308c0.828-0.941,1.861-2.11,4.101-2.07c0.043-0.002,0.087-0.003,0.13-0.003 c2.163,0,3.171,1.148,3.985,2.073c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.006,0.157,0.013 c0.051-0.007,0.104-0.013,0.157-0.013c1.093,0,1.55-0.52,2.241-1.308c0.828-0.941,1.86-2.11,4.101-2.07 c0.044-0.002,0.087-0.003,0.129-0.003c2.163,0,3.173,1.148,3.986,2.073c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,16.684 c1.092,0,1.55-0.521,2.241-1.308c0.828-0.941,1.861-2.111,4.101-2.071c0.043,0,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.148,3.985,2.072c0.692,0.788,1.149,1.308,2.241,1.308c0.054,0,0.106,0.005,0.157,0.012 c0.051-0.007,0.104-0.012,0.157-0.012c1.093,0,1.55-0.521,2.241-1.308c0.828-0.941,1.86-2.111,4.101-2.071 c0.044,0,0.087-0.001,0.129-0.001c2.163,0,3.173,1.148,3.986,2.072c0.691,0.788,1.148,1.308,2.241,1.308"/>
               <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.145,9.714 c1.092,0,1.55-0.519,2.241-1.307c0.828-0.941,1.861-2.111,4.101-2.071c0.043-0.001,0.087-0.001,0.13-0.001 c2.163,0,3.171,1.147,3.985,2.072c0.692,0.788,1.149,1.307,2.241,1.307c0.054,0,0.106,0.006,0.157,0.014 c0.051-0.007,0.104-0.014,0.157-0.014c1.093,0,1.55-0.519,2.241-1.307c0.828-0.941,1.86-2.111,4.101-2.071 c0.044-0.001,0.087-0.001,0.129-0.001c2.163,0,3.173,1.147,3.986,2.072c0.691,0.788,1.148,1.307,2.241,1.307"/>
               </svg> */}
               <svg className="shape waves small" width="100%" height="100%" viewBox="0 0 15 28" version="1.1" xmlns="http://www.w3.org/2000/svg"
               style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
                 <path fill="none" d="M10.129,9.45c2.123,4.526 -1.16,7.87 -1.16,7.87c0,0 -4.669,0.386 -6.792,-4.14c-2.124,-4.527 -0.896,-12.252 -0.896,-12.252c0,0 6.725,3.996 8.848,8.522Z" style={{strokeWidth: '0.5px'}}/>
                 <path fill="none" d="M1.281,0.928l11.941,25.458" style={{strokeWidth: '0.5px'}}/>
               </svg>
          </div>
          <div className="shapes two">
            <div className="rotate-area">
              <svg className="shape circle" width="100%" height="100%" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
                style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
                <path fill="#fff" d="M22.658,12.235c-3.527,2.679 -8.958,1.464 -8.958,1.464c0,0 0.287,-5.558 3.813,-8.237c3.527,-2.679 8.959,-1.464 8.959,-1.464c0,0 -0.287,5.558 -3.814,8.237Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="#fff" d="M9.886,21.937c-3.527,2.679 -8.958,1.464 -8.958,1.464c0,0 0.287,-5.558 3.813,-8.237c3.527,-2.679 8.959,-1.464 8.959,-1.464c0,0 -0.287,5.558 -3.814,8.237Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="#fff" d="M15.164,22.658c-2.679,-3.527 -1.464,-8.958 -1.464,-8.958c0,0 5.558,0.287 8.237,3.813c2.679,3.527 1.464,8.959 1.464,8.959c0,0 -5.558,-0.287 -8.237,-3.814Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="#fff" d="M5.462,9.886c-2.678,-3.527 -1.464,-8.958 -1.464,-8.958c0,0 5.559,0.287 8.238,3.813c2.678,3.527 1.463,8.959 1.463,8.959c0,0 -5.558,-0.287 -8.237,-3.814Z" style={{strokeWidth: '0.5px'}}/>
              </svg>
              <svg className="shape diamond" width="100%" height="100%" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
                style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
                <path fill="#fff" d="M15.29,3.046c-0.996,-1.922 -3.361,-2.673 -5.283,-1.678c-1.922,0.996 -2.673,3.361 -1.678,5.284l1.803,3.48l3.481,-1.803c1.922,-0.996 2.673,-3.361 1.677,-5.283Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="#fff" d="M18.895,10.006c0.996,1.922 0.245,4.287 -1.678,5.283c-1.922,0.996 -4.287,0.245 -5.283,-1.677l-1.802,-3.481l3.48,-1.803c1.922,-0.995 4.287,-0.244 5.283,1.678Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="#fff" d="M1.368,10.257c-0.996,-1.922 -0.245,-4.287 1.678,-5.283c1.922,-0.996 4.287,-0.245 5.283,1.677l1.802,3.481l-3.48,1.803c-1.922,0.995 -4.287,0.244 -5.283,-1.678Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="#fff" d="M4.974,17.218c0.996,1.922 3.361,2.673 5.283,1.678c1.922,-0.996 2.673,-3.361 1.678,-5.284l-1.803,-3.48l-3.481,1.803c-1.922,0.996 -2.673,3.361 -1.677,5.283Z" style={{strokeWidth: '0.5px'}}/>
              </svg>
              <svg className="shape waves" width="100%" height="100%" viewBox="0 0 15 28" version="1.1" xmlns="http://www.w3.org/2000/svg"
              style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
                <path fill="none" d="M10.129,9.45c2.123,4.526 -1.16,7.87 -1.16,7.87c0,0 -4.669,0.386 -6.792,-4.14c-2.124,-4.527 -0.896,-12.252 -0.896,-12.252c0,0 6.725,3.996 8.848,8.522Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="none" d="M1.281,0.928l11.941,25.458" style={{strokeWidth: '0.5px'}}/>
              </svg>
              <svg className="shape waves small" width="100%" height="100%" viewBox="0 0 15 28" version="1.1" xmlns="http://www.w3.org/2000/svg"
              style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '10'}}>
                <path fill="none" d="M10.129,9.45c2.123,4.526 -1.16,7.87 -1.16,7.87c0,0 -4.669,0.386 -6.792,-4.14c-2.124,-4.527 -0.896,-12.252 -0.896,-12.252c0,0 6.725,3.996 8.848,8.522Z" style={{strokeWidth: '0.5px'}}/>
                <path fill="none" d="M1.281,0.928l11.941,25.458" style={{strokeWidth: '0.5px'}}/>
              </svg>
            </div>
          </div>
          <section className="content-wrapper splash">
            <div className="gradient-splash green" />
            <div className="content-splash">
              <div className="baseline">
               {/*
                  <div className="desktop-lookbook">
                  <div className="sprite-lookbook">
                    <img width={1614} height={16800} src="img/sprite-lookbook2abc.png" />
                  </div>
                </div>
                */}
                <div className="mobile-lookbook">
                  <h3>
                    <span className="top">C</span>
                    <span className="bottom">O</span>
                    <span className="top">R</span>
                    <span className="bottom">D</span>
                    <span className="top">I</span>
                    <span className="bottom">A</span>
                    <span className="top">L</span>
                    <span className="bottom">L</span>
                    <span className="top">Y</span>
                  </h3>
                </div>
                <h1 style={{
                  textTransform: 'uppercase',
                  fontSize: 22,
                  letterSpacing: '2px',
                  marginTop: 100,
                  marginBottom: 40
                }}>Boutique wedding website creator</h1>
                <h1>Build your wedding website
                 <br/>
                  <span
                     className="txt-rotate"
                     data-period="1000"
                     data-rotate='[ "with love.", "and match your theme.",  "and impress your guests.", "and collect RSVPs.", "to set the mood for your big day." ]'></span>
                </h1>

              </div>
            </div>
          </section>

          <section className="content-wrapper slipper one">
            <div className="content-slipper">
              <div className="gradient red" />
              <img className="slipper-object" src="img/vintage-wedding-website-sm.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Vintage</h2>
                <p>Looking for eclectic charm from some bygone era?  Then our Vintage style is perfect for you.
                  Create a design that is both appealing and memorable, conjuring up the image of those lovely days long gone.
                </p>
                <a href="/template/vintage" target="_blank" className="link-shop" data-color="#ff4f59">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              {/* <img class="sprite-letter" width="1716" height="4158" src="img/sprite-b.png" /> */}
              <img className="sprite-letter" width={1716} height={4158} src="img/sprite-v2.png" />
              <span>V</span>
            </span>
          </section>
          <section className="content-wrapper slipper two">
            <div className="content-slipper">
              <div className="gradient grey" />
              <img className="slipper-object" src="img/greenery-wedding-website-sm.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Greenery</h2>
                <p>Think lush green countryside, fresh flowers and the scent of grass sprinkled with early-morning dew and you have our Greenery theme.
                  Great at any time of year but loved by those with spring and summer weddings.
                </p>
                <a href="/template/greenery" target="_blank" className="link-shop" data-color="#a7a4b0">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              <img className="sprite-letter" width={1716} height={4158} src="img/sprite-g.png" />
              <span>G</span>
            </span>
          </section>
          <section className="content-wrapper slipper three">
            <div className="content-slipper">
              <div className="gradient yellow" />
              <img className="slipper-object" src="img/modern-wedding-website-sm.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Modern</h2>
                <p>Perfect for those that want clean crisp lines and a contemporary and up-to-the-minute appearance, our
                  Modern style is all that you need and more.
                  Ideal for those that want to keep their wedding minimalistic.
                </p>
                <a href="/template/modern" target="_blank" className="link-shop" data-color="#e0b15c">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              <img className="sprite-letter" width={1716} height={4158} src="img/sprite-m.png" />
              <span>M</span>
            </span>
          </section>
          <section className="content-wrapper slipper four">
            <div className="content-slipper">
              <div className="gradient pink" />
              <img className="slipper-object" src="img/rustic-wedding-website-sm.png" />
              <div className="description-slipper">
                <span>like</span>
                <h2>Rustic</h2>
                <p>Charming homespun barns with countrified and homely surroundings give a hint of what our Rustic theme is based upon.
                  If you love the smell of natural wood and prefer your wedding plain and simple, this is for you.
                </p>
                <a href="/template/rustic" target="_blank" className="link-shop" data-color="#f3bbc3">
                  <div className="overlay-color" />
                  <span>P</span>
                  <span>r</span>
                  <span>e</span>
                  <span>v</span>
                  <span>i</span>
                  <span>e</span>
                  <span>w</span>
                </a>
              </div>
            </div>
            <span className="letter">
              <img className="sprite-letter" width={1716} height={4158} src="img/sprite-r.png" />
              <span>R</span>
            </span>
          </section>
          <style dangerouslySetInnerHTML={{__html: "\n  .slipper-object.object-video1 {\n            margin-top: -120px;\n            }\n            .slipper-object.object-video2 {\n            margin-top: -80px;\n            }\n            .description-slipper  {\n            top:40%;\n            }\n            .slipper.five .description-slipper h2 {\n            color: #fff;\n            }\n            #player {\n            background-color: #fff;\n            }\n            @media screen and (max-width: 550px) {\n            .slipper.five .slipper-object.object-video1, .slipper.five .slipper-object.object-video2 {\n            top: 20%;\n            width: 90%;\n            left: 5%;\n            }\n            .slipper.five .description-slipper h2 {\n            color: inherit;\n            }\n            }\n         " }} />
          <section className="content-wrapper slipper five">
            <div className="content-slipper">
              <div className="gradient victoria" style={{width: '100%'}} />

              <div className="description-slipper" style={{width: '100%',top: '45%'}}>
                <h1 style={{color: '#fff'}}>ADVANCED RSVPS OPTIONS</h1>

                <p>
                  What better way of keeping track of your guests and the RSVPs than using our
                  personalized online invitations? Each one gets sent by email incorporating your wedding
                  details and with the guest’s name included in the design.
                  Custome RSVP questions and +1 options are all here.
                </p>
                <img style={{maxWidth: '90%',  width: 700, marginTop:30 }} src="./img/cordially-wedding-website-builder-sm.png"/>
                {/* <a href="http://store.melanie-f.com/product/victoria" target="_blank" class="link-shop" data-color="#296269">
                     <div class="overlay-color"></div>
                     <span>W</span>
                     <span>a</span>
                     <span>t</span>
                     <span>c</span>
                     <span>h</span>
                     </a> */}
              </div>
            </div>
            {/* <span class="letter">
               <img class="sprite-letter" width="1716" height="3780" src="img/sprite-v.png" />
               <span>V</span>
               </span> */}
          </section>
          <section className="content-wrapper slipper six">
            <div className="content-slipper">
              <div className="gradient blue" style={{width: '100%'}} />
              <style dangerouslySetInnerHTML={{__html: "\n            .slipper-object.object-video2 {\n            margin-top: -140px;\n            }\n            .slipper-object.object-video3 {\n            margin-top: -80px;\n            }\n            .description-slipper  {\n            top:40%;\n            }\n            .slipper.five .description-slipper h2 {\n            color: #fff;\n            }\n            #player {\n            background-color: #fff;\n            }\n            @media screen and (max-width: 550px) {\n            .slipper.six .slipper-object.object-video3, .slipper.six .slipper-object.object-video3 {\n            top: 20%;\n            width: 90%;\n            left: 5%;\n            }\n            .slipper.six .description-slipper h2 {\n            color: inherit;\n            }\n            }\n         " }} />
              {/*  <img className="slipper-object object-video2" src="img/ekran.png" />*/}
              <div className="description-slipper" style={{width: '100%',top: '-1%'}}>
                <div style={{
                  width:'100%',
                  position: 'absolute',
                  top: '0',
                  left:0,
                  zIndex:9
                }}>
                <h1 style={{color: '#fff'}}>ONE-OF-A-TYPE DESIGNS</h1>


                <Slider  {...settings}>
                  <div>
                  <div className="template-screenshot" >
                     <div className="template-screenshot-browser"/>
                     <img className="poster-image"
                     src="/img/romantic-wedding-website-template.png"/>
                     <div className="template-screenshot-overlay">
                        <a target="_blank" style={{fontWeight: 500, lineHeight:"15px", fontFamily: 'AvenirRegular'}} href="/template/romantic" className="header-link">
                        Start with Romantic
                       </a>
                     </div>
                  </div>
                  </div>
                  <div>
                   <div className="template-screenshot" >
                      <div className="template-screenshot-browser"/>
                      <img className="poster-image"
                      src="/img/modern-wedding-website-template.png"/>
                      <div className="template-screenshot-overlay">
                      <a target="_blank" style={{fontWeight: 500, lineHeight:"15px", fontFamily: 'AvenirRegular'}} href="/template/modern" className="header-link">
                      Start with Modern
                     </a>
                      </div>
                   </div>
                   </div>
                   <div>
                   <div className="template-screenshot" >
                      <div className="template-screenshot-browser"/>
                      <img className="poster-image"
                      src="/img/rustic-wedding-website-template.png"/>
                      <div className="template-screenshot-overlay">
                        <a target="_blank" style={{fontWeight: 500, lineHeight:"15px", fontFamily: 'AvenirRegular'}} href="/template/rustic" className="header-link">
                        Start with Rustic
                       </a>
                      </div>
                   </div>
                   </div>
                   <div>
                   <div className="template-screenshot" >
                      <div className="template-screenshot-browser"/>
                      <img className="poster-image"
                      src="/img/magical-garden-wedding-website.png"/>
                      <div className="template-screenshot-overlay is-active">
                        <a target="_blank" style={{fontWeight: 500, lineHeight:"18px", fontFamily: 'AvenirRegular'}} href="/template/magical-garden" className="header-link">
                        Start with Magical Gardern
                       </a>
                      </div>
                   </div>
                   </div>
                   <div>
                   <div className="template-screenshot" >
                      <div className="template-screenshot-browser"/>
                      <img className="poster-image"
                      src="/img/greenery-wedding-websites.png"/>
                      <div className="template-screenshot-overlay is-active">
                      <a target="_blank" style={{fontWeight: 500, lineHeight:"15px", fontFamily: 'AvenirRegular'}} href="/template/greenery" className="header-link">
                      Start with Greenery
                     </a>
                      </div>
                   </div>
                   </div>
                   <div>
                   <div className="template-screenshot" >
                      <div className="template-screenshot-browser"/>
                      <img className="poster-image"
                      src="/img/vintage-wedding-website-theme.png"/>
                      <div className="template-screenshot-overlay is-active">
                        <a target="_blank" style={{fontWeight: 500, lineHeight:"15px", fontFamily: 'AvenirRegular'}} href="/template/vintage" className="header-link">
                        Start with Vintage
                       </a>
                      </div>
                   </div>
                   </div>
                 </Slider>
                 </div>
                {/* <a href="http://store.melanie-f.com/product/celeste" target="_blank" class="link-shop" data-color="#6eaccd">
                     <div class="overlay-color"></div>
                     <span>W</span>
                     <span>a</span>
                     <span>t</span>
                     <span>c</span>
                     <span>h</span>
                     </a> */}
              </div>
            </div>
            {/* <span class="letter">
               <img class="sprite-letter" width="1716" height="4158" src="img/sprite-c.png" />
               <span>C</span>
               </span> */}
          </section>
          <section className="design">
            <h2>FEATURES</h2>
            <div className="wrapper-design">
               {/*<div className="design-1"/>
                  <div className="design-2"/>
                  <div className="design-3"/>
                  <div className="design-4"/>*/}
              <div className="block-design style">
                <h3>
                  <span>R</span>
                  <span>S</span>
                  <span>V</span>
                  <span>P</span>
                  <span>s</span>
                </h3>
                <p>
                  Take the stress out of tracking RSVPs.  Because each invitation is emailed, you can easily see who clicked your email, who opened it and most of all, who sent an RSVP response.  The system does all the hard work so you don’t have to.
                </p>
              </div>
              <div className="block-design pratique">
                <h3>
                  <span>G</span>
                  <span>u</span>
                  <span>e</span>
                  <span>s</span>
                  <span>t</span>
                  <span>-</span>
                  <span>L</span>
                  <span>i</span>
                  <span>s</span>
                  <span>t</span>
                </h3>
                <p>
                  Watch as your guest list grows and changes; immediately see who is coming to your wedding and who cannot.  Send emails quickly and easily and keep a running list of who has responded. It’s that simple.
                </p>
              </div>
              <div className="block-design antiderapant en">
                <h3>
                  <span>C</span>
                  <span>o</span>
                  <span>l</span>
                  <span>l</span>
                  <span>a</span>
                  <span>b</span>
                  <span>o</span>
                  <span>r</span>
                  <span>a</span>
                  <span>t</span>
                  <span>e</span>
                </h3>
                <p>
                  Share your wedding planing tasks! Invite your partner and your wedding planner to collaborate on your website copy and guests list. You can give them permission to edit sections and add guests if you wish.
                </p>
              </div>
              <div className="block-design confort">
                <h3>
                  <span>T</span>
                  <span>r</span>
                  <span>a</span>
                  <span>n</span>
                  <span>s</span>
                  <span>l</span>
                  <span>a</span>
                  <span>t</span>
                  <span>e</span>
                </h3>
                <p>
                  Not everyone wants their Wedding Invitation or guest information in English.
                  Your website allows you to translate any parts of the application that are exposed to the guest to be easily converted into your language.
                </p>
              </div>
              <div className="block-design maintien">
                <h3>
                  <span>C</span>
                  <span>u</span>
                  <span>s</span>
                  <span>t</span>
                  <span>o</span>
                  <span>m</span>
                  <span> </span>
                  <span>D</span>
                  <span>o</span>
                  <span>m</span>
                  <span>a</span>
                  <span>i</span>
                  <span>n</span>
                </h3>
                <p>
                  Make your wedding website trully your own using your easy-to-remember domain.
                  Setting the domain with Cordially no hussle. Not sure how to fix dns?
                  No problem, we are here to make it work for you.
                  And our ulitmate promise: no advertisements on your website. Nada!
                </p>
              </div>
              <div className="block-design raffinement">
                <h3>
                  <span>F</span>
                  <span>i</span>
                  <span>n</span>
                  <span>e</span>
                  <span>-</span>
                  <span>d</span>
                  <span>e</span>
                  <span>s</span>
                  <span>i</span>
                  <span>g</span>
                  <span>n</span>
                </h3>
                <p>
                  Beautifully subtle and finely tailored design, bespoke to suit you.  You will find our schemes pixel perfect, wonderfully crafted and sensitively and skillfully drawn.
                  No two weddings are the same and neither are our websites. Cordially wedding website builder it really is all about you.
                </p>
              </div>
            </div>
            <section className="footer">
              <div className="gradient-footer" />
              <div className="wrapper-footer">
                <div className="footer-shop">
                  <h2>Try It For Free</h2>
                  <h3 style={{ whiteSpace: 'inherit'}}>
                  Create your stunning wedding website with the best builder using top online RSVP websites creator.</h3>
                    <h3>
                    <a target="_blank" style={{
                        position: 'relative',
                        fontSize: 18,
                        fontFamily: 'DidotItalic',
                        color: '#000',
                        fontWeight: 'bold'
                      }} href={`/wedding-website-builder-pricing`} >
                      <span className="text-link">See Pricing</span>
                      <span className="line-link" />
                    </a>
                    <br/>
                    </h3>
                  <p>Do it. With Love. Make your wedding planing easier with Cordially wedding website builder!</p>
                  <a target="_blank" href="/template/modern" className="link-footer" style={{fontWeight:600}} data-color="#000000">
                    <div className="overlay-color" />
                    <span>C</span>
                    <span>r</span>
                    <span>e</span>
                    <span>a</span>
                    <span>t</span>
                    <span>e</span>
                    <span>&nbsp;</span>
                    <span>y</span>
                    <span>o</span>
                    <span>u</span>
                    <span>r</span>
                    <span>&nbsp;</span>
                    <span>o</span>
                    <span>w</span>
                    <span>n</span>
                    <span>!</span>
                  </a>
                </div>
              </div>
              <div className="social-menu">
                 <a target="_blank" href="https://www.instagram.com/cordially.co/">
                     <img class="instagram" onerror="this.src = this.src.replace(/svg/g,'png')" src="img/instagram.png" />
                     </a>
                <a target="_blank" href="https://www.pinterest.com/cordiallyco/">
                  <img className="fb" src="img/pinterest.png" />
                </a>
                <a target="_blank" href="https://www.facebook.com/cordially.co">
                  <img className="fb" src="img/facebook.png" />
                </a>
              </div>
              <div className="credits">
                Cordially  ©  Cordially Wedding Website Builder
              </div>
            </section>
          </section>
          <section className="menu">
            <div className="gradient-menu" />
            <div className="half-screen">
              <div className="left">
                <a target="_blank" href="#">
                  <span className="text-link">Features</span>
                  <span className="line-link" />
                </a>
              </div>
              <div className="right">
                <a href="/wedding-website-builder-about/">
                  <span className="text-link">About</span>
                  <span className="line-link" />
                </a>
                <a href="/wedding-website-builder-pricing/">
                  <span className="text-link">Pricing</span>
                  <span className="line-link" />
                </a>
              </div>
            </div>
            <div className="wrapper-menu">
              {/* <img class="logo-menu" onerror="this.src = this.src.replace(/svg/g,'png')" src="img/logo-white.svg" /> */}
              <span className="slipper-link">
                <span className="text-link">Vintage<span className="line-link" /></span>
              </span>
              <span className="slipper-link">
                <span className="text-link">Greenery<span className="line-link" /></span>
              </span>
              <span className="slipper-link">
                <span className="text-link">Modern<span className="line-link" /></span>
              </span>
              <span className="slipper-link">
                <span className="text-link">Rustic<span className="line-link" /></span>
              </span>
              {/* <span class="slipper-link">
                  <span class="text-link">Victoria<span class="line-link"></span></span>
                  </span>
                  <span class="slipper-link">
                  <span class="text-link">Celeste<span class="line-link"></span></span>
                  </span> */}
            </div>
          </section>
          <a target="_blank" href="https://www.cordially.co/admin/guest-list" className="nav-login"
          style={{paddingRight: 80, width: 150, display: 'block', opacity: 1, fontWeight:600}}>
            <span className="wrapper-letters">
              <span>L</span>
              <span>o</span>
              <span>g</span>
              <span>i</span>
              <span>n</span>
            </span>
            <div className="line-menu" />
            <div className="line-menu-hover" />
          </a>
          <a href="#" className="nav-menu" style={{fontWeight:600, minWidth: 70}}>
            <span className="wrapper-letters">
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>u</span>
            </span>
            <div className="line-menu" />
            <div className="line-menu-hover" />
          </a>
        </div>
        <div className="logo-wrapper">

          <style dangerouslySetInnerHTML={{__html: "\n            .header-link {\n            border: 1px solid #84ACE1;\n            position: relative;\n            text-decoration: none;\n            padding:11px 50px;\n            border-radius: 25px;\n            font-size: 18px;\n            font-family: DidotItalic;\n            color: #84ACE1;\n            top: 2%;\n            line-height: 40px;\n            transition: all 1s ease;\n            }\n            .header-link:hover {\n            background-color: #84ACE1;\n            color: #fff;\n            z-index: 9\n            }\n         " }} />
          <a target="_blank" style={{fontWeight: 600}} href="/template/modern" className="header-link">
            Browse Templates
          </a>
          <div className="scroll">
            <div className="scroll-text">
            <div id="header-slider" className="gradient red" style={{
              width:'40%',
              position: 'absolute',
              top: '-210%',
              right: '1%',
              perspective: '500px',
              display: 'none',
              // transform: 'translateX(-50%)',
              zIndex:9
            }}>



             </div>
             <div style={{marginTop: 20}}>
            or
            </div>
            </div>
            <div className="scroll-text">scroll</div>
            <div className="line-wrapper">
              <div className="line" />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Landing;
