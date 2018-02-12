import React, { Component } from "react";
import './Themes.scss';

import Helmet from 'react-helmet';



              // <section className="section section--padding-top-only section--tight grid--hide-last">
              //   <div className="section-block section-block--theme-collection" data-trekkie-collection-handle="trending-themes" data-trekkie-collection-position={1}>
              //     <div className="grid gutter-bottom">
              //       <div className="grid__item grid__item--mobile-up-2">
              //         <h3 className="gutter-bottom--reset">Trending this week</h3>
              //       </div>    <div className="grid__item grid__item--mobile-up-2 text-right">
              //         <a className="body-link" data-trekkie-collection-handle="trending-themes" data-trekkie-collection-position={1} href="/collections/trending-themes">
              //           See more <span className="visuallyhidden">Trending this week</span>
              //         </a></div></div>
              //     <div id="Themes">
              //       <div className="grid grid--equal-height">
              //         <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-644">
              //           <a className="theme__image" data-trekkie-style-id={644} data-trekkie-style-handle="light" data-trekkie-theme-handle="simple" data-trekkie-theme-id={578} href="/themes/simple/styles/light">
              //             <img alt="Simple - Light" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/644/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/644/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/644/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/644/main/optimized_large.jpg" alt="Simple - Light" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={644} data-trekkie-style-handle="light" data-trekkie-theme-handle="simple" data-trekkie-theme-id={578} href="/themes/simple/styles/light">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Simple</span>
              //             </a>  <span className="theme-info__price">
              //               Free
              //             </span>
              //             <p className="gutter-bottom--reset">2 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-1140">
              //           <a className="theme__image" data-trekkie-style-id={1140} data-trekkie-style-handle="classic" data-trekkie-theme-handle="brooklyn" data-trekkie-theme-id={730} href="/themes/brooklyn/styles/classic">
              //             <img alt="Brooklyn - Classic" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/1140/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1140/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1140/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/1140/main/optimized_large.jpg" alt="Brooklyn - Classic" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={1140} data-trekkie-style-handle="classic" data-trekkie-theme-handle="brooklyn" data-trekkie-theme-id={730} href="/themes/brooklyn/styles/classic">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Brooklyn</span>
              //             </a>  <span className="theme-info__price">
              //               Free
              //             </span>
              //             <p className="gutter-bottom--reset">2 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-900">
              //           <a className="theme__image" data-trekkie-style-id={900} data-trekkie-style-handle="bone" data-trekkie-theme-handle="pop" data-trekkie-theme-id={719} href="/themes/pop/styles/bone">
              //             <img alt="Pop - Bone" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/900/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/900/main/fullsize.jpeg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/900/main/fullsize_2x.jpeg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/900/main/optimized_large.jpg" alt="Pop - Bone" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={900} data-trekkie-style-handle="bone" data-trekkie-theme-handle="pop" data-trekkie-theme-id={719} href="/themes/pop/styles/bone">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Pop</span>
              //             </a>  <span className="theme-info__price">
              //               Free
              //             </span>
              //             <p className="gutter-bottom--reset">2 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-1146">
              //           <a className="theme__image" data-trekkie-style-id={1146} data-trekkie-style-handle="supply" data-trekkie-theme-handle="empire" data-trekkie-theme-id={838} href="/themes/empire/styles/supply">
              //             <img alt="Empire - Supply" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/1146/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1146/main/fullsize.png 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1146/main/fullsize_2x.png 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/1146/main/optimized_large.jpg" alt="Empire - Supply" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={1146} data-trekkie-style-handle="supply" data-trekkie-theme-handle="empire" data-trekkie-theme-id={838} href="/themes/empire/styles/supply">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Empire</span>
              //             </a>  <span className="theme-info__price">
              //               $180
              //             </span>
              //             <p className="gutter-bottom--reset">3 styles</p>
              //           </div>
              //         </div></div></div>
              //   </div>
              //   <div className="section-block section-block--theme-collection" data-trekkie-collection-handle="big-beautiful-imagery" data-trekkie-collection-position={2}>
              //     <div className="grid gutter-bottom">
              //       <div className="grid__item grid__item--mobile-up-2">
              //         <h3 className="gutter-bottom--reset">Big, beautiful imagery</h3>
              //       </div>    <div className="grid__item grid__item--mobile-up-2 text-right">
              //         <a className="body-link" data-trekkie-collection-handle="big-beautiful-imagery" data-trekkie-collection-position={2} href="/collections/big-beautiful-imagery">
              //           See more <span className="visuallyhidden">Big, beautiful imagery</span>
              //         </a></div></div>
              //     <div id="Themes">
              //       <div className="grid grid--equal-height">
              //         <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-770">
              //           <a className="theme__image" data-trekkie-style-id={770} data-trekkie-style-handle="cloudbreak" data-trekkie-theme-handle="alchemy" data-trekkie-theme-id={657} href="/themes/alchemy/styles/cloudbreak">
              //             <img alt="Alchemy - CloudBreak" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/770/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/770/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/770/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/770/main/optimized_large.jpg" alt="Alchemy - CloudBreak" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={770} data-trekkie-style-handle="cloudbreak" data-trekkie-theme-handle="alchemy" data-trekkie-theme-id={657} href="/themes/alchemy/styles/cloudbreak">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Alchemy</span>
              //             </a>  <span className="theme-info__price">
              //               $150
              //             </span>
              //             <p className="gutter-bottom--reset">4 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-685">
              //           <a className="theme__image" data-trekkie-style-id={685} data-trekkie-style-handle="oslo" data-trekkie-theme-handle="envy" data-trekkie-theme-id={411} href="/themes/envy/styles/oslo">
              //             <img alt="Envy - Oslo" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/685/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/685/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/685/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/685/main/optimized_large.jpg" alt="Envy - Oslo" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={685} data-trekkie-style-handle="oslo" data-trekkie-theme-handle="envy" data-trekkie-theme-id={411} href="/themes/envy/styles/oslo">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Envy</span>
              //             </a>  <span className="theme-info__price">
              //               $140
              //             </span>
              //             <p className="gutter-bottom--reset">4 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-1122">
              //           <a className="theme__image" data-trekkie-style-id={1122} data-trekkie-style-handle="warm" data-trekkie-theme-handle="narrative" data-trekkie-theme-id={829} href="/themes/narrative/styles/warm">
              //             <img alt="Narrative - Warm" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/1122/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1122/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1122/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/1122/main/optimized_large.jpg" alt="Narrative - Warm" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={1122} data-trekkie-style-handle="warm" data-trekkie-theme-handle="narrative" data-trekkie-theme-id={829} href="/themes/narrative/styles/warm">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Narrative</span>
              //             </a>  <span className="theme-info__price">
              //               Free
              //             </span>
              //             <p className="gutter-bottom--reset">3 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-1145">
              //           <a className="theme__image" data-trekkie-style-id={1145} data-trekkie-style-handle="ecstatic" data-trekkie-theme-handle="ira" data-trekkie-theme-id={790} href="/themes/ira/styles/ecstatic">
              //             <img alt="Ira - Ecstatic" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/1145/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1145/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1145/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/1145/main/optimized_large.jpg" alt="Ira - Ecstatic" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={1145} data-trekkie-style-handle="ecstatic" data-trekkie-theme-handle="ira" data-trekkie-theme-id={790} href="/themes/ira/styles/ecstatic">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Ira</span>
              //             </a>  <span className="theme-info__price">
              //               $180
              //             </span>
              //             <p className="gutter-bottom--reset">3 styles</p>
              //           </div>
              //         </div></div></div>
              //   </div>
              //   <div className="section-block padding-top-only section-block--theme-collection" data-trekkie-collection-handle="large-inventory" data-trekkie-collection-position={3}>
              //     <div className="grid gutter-bottom">
              //       <div className="grid__item grid__item--mobile-up-2">
              //         <h3 className="gutter-bottom--reset">Great for large inventories</h3>
              //       </div>    <div className="grid__item grid__item--mobile-up-2 text-right">
              //         <a className="body-link" data-trekkie-collection-handle="large-inventory" data-trekkie-collection-position={3} href="/collections/large-inventory">
              //           See more <span className="visuallyhidden">Great for large inventories</span>
              //         </a></div></div>
              //     <div id="Themes">
              //       <div className="grid grid--equal-height">
              //         <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-755">
              //           <a className="theme__image" data-trekkie-style-id={755} data-trekkie-style-handle="popup-shop" data-trekkie-theme-handle="fashionopolism" data-trekkie-theme-id={141} href="/themes/fashionopolism/styles/popup-shop">
              //             <img alt="Fashionopolism - Popup Shop" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/755/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/755/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/755/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/755/main/optimized_large.jpg" alt="Fashionopolism - Popup Shop" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={755} data-trekkie-style-handle="popup-shop" data-trekkie-theme-handle="fashionopolism" data-trekkie-theme-id={141} href="/themes/fashionopolism/styles/popup-shop">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Fashionopolism</span>
              //             </a>  <span className="theme-info__price">
              //               $140
              //             </span>
              //             <p className="gutter-bottom--reset">4 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-819">
              //           <a className="theme__image" data-trekkie-style-id={819} data-trekkie-style-handle="dolce" data-trekkie-theme-handle="icon" data-trekkie-theme-id={686} href="/themes/icon/styles/dolce">
              //             <img alt="Icon - Dolce" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/819/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/819/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/819/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/819/main/optimized_large.jpg" alt="Icon - Dolce" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={819} data-trekkie-style-handle="dolce" data-trekkie-theme-handle="icon" data-trekkie-theme-id={686} href="/themes/icon/styles/dolce">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Icon</span>
              //             </a>  <span className="theme-info__price">
              //               $140
              //             </span>
              //             <p className="gutter-bottom--reset">3 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-999">
              //           <a className="theme__image" data-trekkie-style-id={999} data-trekkie-style-handle="kyoto" data-trekkie-theme-handle="kagami" data-trekkie-theme-id={747} href="/themes/kagami/styles/kyoto">
              //             <img alt="Kagami - Kyoto" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/999/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/999/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/999/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/999/main/optimized_large.jpg" alt="Kagami - Kyoto" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={999} data-trekkie-style-handle="kyoto" data-trekkie-theme-handle="kagami" data-trekkie-theme-id={747} href="/themes/kagami/styles/kyoto">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Kagami</span>
              //             </a>  <span className="theme-info__price">
              //               $180
              //             </span>
              //             <p className="gutter-bottom--reset">3 styles</p>
              //           </div>
              //         </div>        <div className="grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item--desktop-up-quarter grid-item--theme" id="theme-1084">
              //           <a className="theme__image" data-trekkie-style-id={1084} data-trekkie-style-handle="prague" data-trekkie-theme-handle="capital" data-trekkie-theme-id={812} href="/themes/capital/styles/prague">
              //             <img alt="Capital - Prague" data-sizes="auto" data-srcset="https://s3.amazonaws.com/shopify-theme-store/screenshots/1084/main/optimized_large.jpg 380w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1084/main/fullsize.jpg 500w,
              //        https://s3.amazonaws.com/shopify-theme-store/screenshots/1084/main/fullsize_2x.jpg 1000w" className="lazyload" />
              //             <noscript>&lt;img src="https://s3.amazonaws.com/shopify-theme-store/screenshots/1084/main/optimized_large.jpg" alt="Capital - Prague" /&gt;</noscript>
              //           </a>
              //           <div className="theme-info">
              //             <a data-trekkie-style-id={1084} data-trekkie-style-handle="prague" data-trekkie-theme-handle="capital" data-trekkie-theme-id={812} href="/themes/capital/styles/prague">
              //               <span className="heading--4 body-link theme-info__name gutter-bottom--reset">Capital</span>
              //             </a>  <span className="theme-info__price">
              //               $160
              //             </span>
              //             <p className="gutter-bottom--reset">3 styles</p>
              //           </div>
              //         </div></div></div>
              //   </div>
              // </section>

class Themes extends Component {

  componentWillMount() {
    if (typeof window !== 'undefined') {
      const script = document.createElement("script");
      script.src = "/themes.js";
      script.async = true;

      document.body.appendChild(script);
    }
 }


  render() {
    const { config } = this.props;
    return (
        <div>
        <Helmet title={`Modern wedding website | Cordially - Boutique Wedding Website Creator`}>
          <meta content="https://www.cordially.co/img/modern/modern-wedding.jpg" property='og:image' />
          <meta property="og:title"  content={`How to have a perfectly modern wedding - build your wedding website with Cordially.`} />
          <meta property="og:description" content="With our help, you can make sure that your wedding website is a modern and perfectly reflects your wedding theme."/>
        </Helmet>

          <div id="PageContainer">
          <div className="lol" style={{position: 'absolute', marginTop: -15 }}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <symbol id="caret-right-thin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.4 40">
              <path d="M20.4 20c0 .7-.2 1.3-.7 1.8l-18 17.9c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l17.9-17.9c.2-.2.2-.6 0-.8L.3 1.7C-.1 1.3-.1.7.3.3s1-.4 1.4 0l17.9 17.9c.5.5.8 1.1.8 1.8z" /></svg>
              </symbol>
            </svg>
          </div>
            <main role="main" id="Main">
              <div className="home-carousel">
                <div className="home-carousel__container" style={{backgroundColor: 'rgba(211,217,217,0.15)'}}>

                  <div className="carousel-item home-carousel__item" data-index={0} data-ui-color-light="rgba(211,217,217,0.15)">
                    <div className="grid grid--equal-height home-carousel__grid">
                      <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-4 grid__item--desktop-up-7 display--tablet display--desktop ">
                        <div className="home-carousel__images">
                          <div className="main-screenshot main-screenshot--home-carousel">
                            <a tabIndex={-1} href="https://www.cordially.co/template/modern">
                              <img className="themes main-screenshot__image lazyload" alt="Desktop preview for the Modern Wedding Website Theme" data-src="/img/modern/modern-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for the Modern wedding website theme" src="https://www.cordially.co/img/modern/modern-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                          <div className="iphone-wrapper iphone-wrapper--home">
                            <div className="iphone">
                              <div className="iphone__screenshot">
                                <a tabIndex={-1} href="/template/modern">
                                  <img className="themes lazyload" alt="Mobile preview for the Pop - Bone theme" data-src="/img/modern/modern-wedding-website-mobile.jpg" />
                                  <noscript>
                                    &lt;img alt="Mobile preview for the Modern wedding website theme" src="https://www.cordially.co/img/modern/modern-wedding-website-mobile.jpg" /&gt;
                                  </noscript>
                                </a>                    </div>
                            </div>
                          </div>
                        </div>
                      </div>            <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-2 grid__item--desktop-up-5 home-carousel__details-grid">
                        <div className="home-carousel__details">
                          <h3 className="heading--1">Modern</h3>
                          <p className="home-carousel__tagline heading--3">A minimalist theme, designed to keep your content accessible. Customize colors, fonts and wreath to match your style.</p>
                          <p className="home-carousel__ctas">
                            <a className="marketing-button marketing-button--lowlight" href="/template/modern">Live Preview</a>
                          </p>
                          <div className="text-center display--mobile gutter-bottom">
                            <a href="/templates/modern">
                              <img className="themes lazyload theme-carousel__mobile-image" alt="Desktop preview for Bone" data-src="https://www.cordially.co/img/modern/modern-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for Modern wedding website template" src="https://www.cordially.co/img/modern/modern-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                        </div>
                      </div></div>      </div>
                  <div className="carousel-item home-carousel__item" data-index={1} data-ui-color-light="rgba(242,124,97,0.15)">
                    <div className="grid grid--equal-height home-carousel__grid">
                      <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-4 grid__item--desktop-up-7 display--tablet display--desktop ">
                        <div className="home-carousel__images">
                          <div className="main-screenshot main-screenshot--home-carousel">
                            <a tabIndex={-1} href="/template/secret-garden">
                              <img className="themes main-screenshot__image lazyload" alt="Desktop preview for the Secret Garden wedding theme theme" data-src="/img/secret-garden/secret-garden-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for the Secret Garden wedding website theme" src="https://www.cordially.co/img/secret-garden/secret-garden-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                          <div className="iphone-wrapper iphone-wrapper--home">
                            <div className="iphone">
                              <div className="iphone__screenshot">
                                <a tabIndex={-1} href="/template/secret-garden">
                                  <img className=" themes lazyload" alt="Mobile preview for the Secret Garden wedding website theme" data-src="/img/secret-garden/secret-garden-wedding-website-mobile.jpg" />
                                  <noscript>
                                    &lt;img alt="Mobile preview for the Secret Garden theme" src="https://www.cordially.co/img/secret-garden/secret-garden-wedding-website-mobile.jpg" /&gt;
                                  </noscript>
                                </a>                    </div>
                            </div>
                          </div>
                        </div>
                      </div>            <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-2 grid__item--desktop-up-5 home-carousel__details-grid">
                        <div className="home-carousel__details">
                          <h3 className="heading--1">Secret Garden</h3>
                          <p className="home-carousel__tagline heading--3">Playful and original theme. Amazing for outdoor, garden weddings.</p>
                          <p className="home-carousel__ctas">
                            <a className="marketing-button marketing-button--lowlight" href="/template/secret-garden">Live Preview</a>
                          </p>
                          <div className="text-center display--mobile gutter-bottom">
                            <a href="/themes/simple/styles/light">
                              <img className="themes lazyload theme-carousel__mobile-image" alt="Desktop preview for Light" data-src="/img/secret-garden/secret-garden-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for Secret Garden" src="https://www.cordially.co/img/secret-garden/secret-garden-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                        </div>
                      </div></div>      </div>
                  <div className="carousel-item home-carousel__item" data-index={2} data-ui-color-light="rgba(27,30,49,0.15)">
                    <div className="grid grid--equal-height home-carousel__grid">
                      <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-4 grid__item--desktop-up-7 display--tablet display--desktop ">
                        <div className="home-carousel__images">
                          <div className="main-screenshot main-screenshot--home-carousel">
                            <a tabIndex={-1} href="/template/rustic">
                              <img className="themes main-screenshot__image lazyload" alt="Desktop preview for the Rustic wedding website theme" data-src="/img/rustic/rustic-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for the Rustic wedding website theme" src="https://www.cordially.co/img/rustic/rustic-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                          <div className="iphone-wrapper iphone-wrapper--home">
                            <div className="iphone">
                              <div className="iphone__screenshot">
                                <a tabIndex={-1} href="/template/rustic">
                                  <img className="themes lazyload" alt="Mobile preview for the Rustic wedding website theme" data-src="/img/rustic/rustic-wedding-website-mobile.jpg" />
                                  <noscript>
                                    &lt;img alt="Mobile preview for the Rustic wedding website theme" src="https://www.cordially.co/img/rustic/rustic-wedding-website-mobile.jpg" /&gt;
                                  </noscript>
                                </a>                    </div>
                            </div>
                          </div>
                        </div>
                      </div>            <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-2 grid__item--desktop-up-5 home-carousel__details-grid">
                        <div className="home-carousel__details">
                          <h3 className="heading--1">Rustic</h3>
                          <p className="home-carousel__tagline heading--3">A simple, clean design that keeps the focus on your products</p>
                          <p className="home-carousel__ctas">
                            <a className="marketing-button marketing-button--lowlight" href="/template/rustic">Live Preview</a>
                          </p>
                          <div className="text-center display--mobile gutter-bottom">
                            <a href="/template/rustic">
                              <img className="themes lazyload theme-carousel__mobile-image" alt="Desktop preview for rustic weddinf website template" data-src="/img/rustic/rustic-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for Rustic wedding website theme" src="https://www.cordially.co/img/rustic/rustic-wedding-website-mobile.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                        </div>
                      </div></div>      </div>
                  <div className="carousel-item home-carousel__item" data-index={3} data-ui-color-light="rgba(111,126,130,0.15)">
                    <div className="grid grid--equal-height home-carousel__grid">
                      <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-4 grid__item--desktop-up-7 display--tablet display--desktop ">
                        <div className="home-carousel__images">
                          <div className="main-screenshot main-screenshot--home-carousel">
                            <a tabIndex={-1} href="/template/romantic">
                              <img className="themes main-screenshot__image lazyload" alt="Desktop preview for the Romantic" data-src="/img/romantic/romantic-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for the Romantic wedding website theme" src="https://www.cordially.co/img/romantic/romantic-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                          <div className="iphone-wrapper iphone-wrapper--home">
                            <div className="iphone">
                              <div className="iphone__screenshot">
                                <a tabIndex={-1} href="/template/romantic">
                                  <img className=" themes lazyload" alt="Mobile preview for the Brooklyn - Classic theme" data-src="/img/romantic/romantic-wedding-website-mobile.jpg" />
                                  <noscript>
                                    &lt;img alt="Mobile preview for the Romantic" src="https://www.cordially.co/img/romantic/romantic-wedding-website-mobile.jpg" /&gt;
                                  </noscript>
                                </a>                    </div>
                            </div>
                          </div>
                        </div>
                      </div>            <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-2 grid__item--desktop-up-5 home-carousel__details-grid">
                        <div className="home-carousel__details">
                          <h3 className="heading--1">Romantic</h3>
                          <p className="home-carousel__tagline heading--3">Romantic flowers are perfect for your lovely wedding theme.</p>
                          <p className="home-carousel__ctas">
                            <a className="marketing-button marketing-button--lowlight" href="/template/romantic">Live Preview</a>
                          </p>
                          <div className="text-center display--mobile gutter-bottom">
                            <a href="/themes/brooklyn/styles/classic">
                              <img className="themes lazyload theme-carousel__mobile-image" alt="Desktop preview for Classic" data-src="/img/romantic/romantic-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for Romantic wedding website theme" src="https://www.cordially.co/img/romantic/romantic-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                        </div>
                      </div></div>      </div>
                  <div className="carousel-item home-carousel__item" data-index={4} data-ui-color-light="rgba(211,217,217,0.15)">
                    <div className="grid grid--equal-height home-carousel__grid">
                      <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-4 grid__item--desktop-up-7 display--tablet display--desktop ">
                        <div className="home-carousel__images">
                          <div className="main-screenshot main-screenshot--home-carousel">
                            <a tabIndex={-1} href="/template/vintage">
                              <img className="themes main-screenshot__image lazyload" alt="Desktop preview for the vintage wedding website template" data-src="/img/vintage/vintage-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for the Vintage wedding theme" src="https://www.cordially.co/img/vintage/vintage-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                          <div className="iphone-wrapper iphone-wrapper--home">
                            <div className="iphone">
                              <div className="iphone__screenshot">
                                <a tabIndex={-1} href="/template/vintage">
                                  <img className=" themes lazyload" alt="Mobile preview for the vintage wedding website template" data-src="/img/vintage/vintage-wedding-website-mobile.jpg" />
                                  <noscript>
                                    &lt;img alt="Mobile preview for the Vintage weeding website" src="/img/vintage/vintage-wedding-website-mobile.jpg" /&gt;
                                  </noscript>
                                </a>                    </div>
                            </div>
                          </div>
                        </div>
                      </div>            <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-2 grid__item--desktop-up-5 home-carousel__details-grid">
                        <div className="home-carousel__details">
                          <h3 className="heading--1">Vintage</h3>
                          <p className="home-carousel__tagline heading--3">A moody template with vintage-inspired flowers. Original and delightful.</p>
                          <p className="home-carousel__ctas">
                            <a className="marketing-button marketing-button--lowlight" href="/template/vintage">Live Preview</a>
                          </p>
                          <div className="text-center display--mobile gutter-bottom">
                            <a href="/themes/providence/styles/seaside">
                              <img className="themes lazyload theme-carousel__mobile-image" alt="Desktop preview for Seaside" data-src="/img/vintage/vintage-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for vintage template" src="/img/vintage/vintage-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                        </div>
                      </div></div>      </div>
                  <div className="carousel-item home-carousel__item" data-index={5} data-ui-color-light="rgba(202,169,116,0.15)">
                    <div className="grid grid--equal-height home-carousel__grid">
                      <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-4 grid__item--desktop-up-7 display--tablet display--desktop ">
                        <div className="home-carousel__images">
                          <div className="main-screenshot main-screenshot--home-carousel">
                            <a tabIndex={-1} href="/template/greenery">
                              <img className="themes main-screenshot__image lazyload" alt="Desktop preview for the Greenery wedding website" data-src="/img/greenery/greenery-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for the Greenery theme" src="/img/greenery/greenery-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                          <div className="iphone-wrapper iphone-wrapper--home">
                            <div className="iphone">
                              <div className="iphone__screenshot">
                                <a tabIndex={-1} href="/template/greenery">
                                  <img className=" themes lazyload" alt="Mobile preview for the Greenery wedding website template" data-src="/img/greenery/greenery-wedding-website-mobile.jpg" />
                                  <noscript>
                                    &lt;img alt="Mobile preview for the Greenery wedding website template" src="/img/greenery/greenery-wedding-website-mobile.jpg" /&gt;
                                  </noscript>
                                </a>                    </div>
                            </div>
                          </div>
                        </div>
                      </div>            <div className="grid__item grid__item--mobile-up-4 grid__item--tablet-up-2 grid__item--desktop-up-5 home-carousel__details-grid">
                        <div className="home-carousel__details">
                          <h3 className="heading--1">Greenery</h3>
                          <p className="home-carousel__tagline heading--3">Minimalistic and clean, perfect for modern Greenery wedding theme.</p>
                          <p className="home-carousel__ctas">
                            <a className="marketing-button marketing-button--lowlight" href="/template/greenery">Live Preview</a>
                          </p>
                          <div className="text-center display--mobile gutter-bottom">
                            <a href="/template/greenery">
                              <img className="themes lazyload theme-carousel__mobile-image" alt="Desktop preview for King" data-src="/img/greenery/greenery-wedding-website.jpg" />
                              <noscript>
                                &lt;img alt="Desktop preview for  Greenery wedding website" src="/img/greenery/greenery-wedding-website.jpg" /&gt;
                              </noscript>
                            </a>                </div>
                        </div>
                      </div></div>      </div>
                  <div className="home-carousel__navigation">
                    <div className="display--mobile">
                      <h5 className="gutter-bottom--reset">Latest themes</h5>
                    </div>
                    <div className="carousel-nav">
                      <div className="grid">
                        <div className="grid__item grid__item--mobile-up-2 grid__item--tablet-up-4 grid__item--desktop-up-7 grid-item--spacer">
                          <span className="visuallyhidden" />
                        </div>                <div className="grid__item grid__item--mobile-up-2 grid__item--tablet-up-2 grid__item--desktop-up-5 grid-item--carousel-nav">
                          <div className="home-carousel__navigation-btn-wrapper gutter-bottom--reset--mobile heading--3">
                            <button type="button" className="carousel-arrow-left home-carousel__navigation-btn home-carousel__navigation-btn--previous">
                              <svg className="icon"> <use xlinkHref="#caret-right-thin" /> </svg>
                              <span className="visuallyhidden">Previous</span>
                            </button>
                            <span className="home-carousel__current-index">1</span> / 6
                            <button type="button" className="carousel-arrow-right home-carousel__navigation-btn home-carousel__navigation-btn--next">
                              <svg className="icon"> <use xlinkHref="#caret-right-thin" /> </svg>
                              <span className="visuallyhidden">Next</span>
                            </button>
                          </div>
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="section section--tight section--padding-top-only" style={{paddingBottom: 100}}>
                <div className="grid grid--equal-height grid--vertically-centered">
                  <div className="grid__item grid__item--tablet-up-half gutter-bottom--mobile">
                    <h1 className="heading--2">Find the perfect theme for your wedding website</h1>
                    <p className="text-major">Explore our range of beautiful themes to find the right look and feel for your wedding. Find inspiration, discover styles, and set up the mood for your big day.</p>
                    <a href="/template/modern" className="marketing-button marketing-button--small marketing-button--secondary">Explore themes</a>
                  </div>    <div className="grid__item grid__item--tablet-up-half">
                    <div className="grid grid--bleed grid--equal-height">
                      <div className="grid__item">
                      <iframe src="https://player.vimeo.com/video/237052963" width="100%" height="383" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

                      </div>

                      </div></div></div>
              </section>


              <section className="section-block--light grid--bleed section-block--border-top js-track-inline-signup section-block">
                <div className="page-width" style={{textAlign: 'center'}}>
                  <h2 className="marketing-form--inline__heading">Try Cordially for free!</h2>
                  <div style={{display: 'inline-block'}}>
                      <div>
                      <div>
                      <a href="https://www.cordially.co/admin/register?templateName=modern">
                      <button className="marketing-button marketing-form__button marketing-input-button-pair__button " name="button"  >

                      <span className="translation_missing" title="translation missing: en.nav.get_started">Get Started</span></button>  </a></div><span className="marketing-form__messages" /></div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>


    );
  }
}

export default Themes;
