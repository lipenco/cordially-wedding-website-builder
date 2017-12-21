import React, { Component } from 'react';
import './AllThemes.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class About extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode:true,
        slidesToScroll: 1,
        focusOnSelect:true,
    };


    return (
      <div className="about">
          <div className="inner">
            <figure>
              <figcaption>
                <h1>Choose the Theme You Love.</h1>
                <p>Get inspired to take your wedding planning
                from ho-hum to um-woah with your favorite wedding theme.</p>
              <br/>

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







              </figcaption>

            </figure>
            <div style={{margin: '30px 0', textAlign:'center'}}>


            <a href="https://www.cordially.co/template/modern" target='blank'>
            <h3 className="call">Build Your Wedding Website</h3>
            </a>

           </div>

          <section className="related">
            <p>We’d be happy to hear from you. Drop us a line at: support@cordially.co.</p>
          </section>
          </div>
        </div>
    );
  }
}

export default About;
