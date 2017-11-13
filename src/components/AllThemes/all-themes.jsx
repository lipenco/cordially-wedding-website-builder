import React, { Component } from 'react';
import './AllThemes.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
          <div className="inner">
            <figure>
              <figcaption>
                <h1>Choose the Theme You Love.</h1>
                <p>Get inspired to take your wedding planning
                from ho-hum to um-woah with your favorite wedding theme.</p>
              <br/>
              <div className="gallery-container">
              <h2>1. Website for modern wedding</h2>
              <div className="thumb">
              	<div className="thumb-image">
              		<a href="https://app.cordially.co/template/modern" title="Modern Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/2Hl8Mm5WQkCvNjleUZy5" alt="Modern Wedding Website Theme"/>
                  </a>
              	</div>

              	<div className="thumb-info">
              		<div className="thumb-title">
              	        <div className="thumb-name">
              				<h2><a href="https://app.cordially.co/template/modern" title="Modern Wedding Website Theme">Modern Wedding Website Template</a>
                      <a style={{float: 'right'}} href="https://app.cordially.co/template/modern" target="_blank" title="Launch Website">
                      Preview
                      </a></h2>
              			</div>
              	  	</div>
              	</div>
	               <div class="clear"></div>
                 </div>


              <div className="gallery-container">
              <h2>2. Website for rustic barn wedding</h2>
              <div className="thumb">
                <div className="thumb-image">
                  <a href="https://app.cordially.co/template/rustic" title="Rustic Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/cWUxYsqdQricLOSVxW6M" alt="Rustic Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="https://app.cordially.co/template/rustic" title="Romantic Wedding Website Theme">Rustic Wedding Website Template</a>
                      <a style={{float: 'right'}} href="https://app.cordially.co/template/rustic" target="_blank" title="Launch Website">
                      Preview
                      </a></h2>
                    </div>
                    </div>
                </div>
                 <div class="clear"></div>
                 </div>
              </div>
              </div>

              <div className="gallery-container">
              <h2>3. Website for greenery wedding</h2>
              <div className="thumb">
                <div className="thumb-image">
                  <a href="https://app.cordially.co/template/greenery" title="Greenery Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/ogCS07jTq6N79nWyxgMw" alt="Greenery Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="https://app.cordially.co/template/greenery" title="Greenery Wedding Website Theme">Greenery Wedding Wesbite Template</a>
                      <a style={{float: 'right'}} href="https://app.cordially.co/template/greenery" target="_blank" title="Launch Website">
                      Preview
                      </a></h2>
                    </div>
                    </div>
                </div>
                 <div class="clear"></div>
                 </div>
              </div>

              <div className="gallery-container">
              <h2>4. Website for modern vintage wedding</h2>
              <div className="thumb">
                <div className="thumb-image">
                  <a href="https://app.cordially.co/template/vinatge" title="Vinatge Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/l5NHfzKR9HCdl63RbVkQ" alt="Vinatge Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="https://app.cordially.co/template/vinatge" title="Vinatge Wedding Website Theme">Vinatge Theme</a>
                      <a style={{float: 'right'}} href="https://app.cordially.co/template/vinatge" target="_blank" title="Launch Website">
                      Preview
                      </a></h2>
                    </div>
                    </div>
                </div>
                 <div class="clear"></div>
                 </div>

              </div>


              <div className="gallery-container">
              <h2>5. Website for romantic style wedding </h2>
              <div className="thumb">
                <div className="thumb-image">
                  <a href="https://app.cordially.co/template/romantic" title="Romantic Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/X9wUF76dSXyrgX3RPzkK" alt="Romantic Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="https://app.cordially.co/template/romantic" title="Romantic Wedding Website Theme">Romantic Theme</a>
                      <a style={{float: 'right'}} href="https://app.cordially.co/template/romantic" target="_blank" title="Launch Website">
                      Preview
                      </a></h2>
                    </div>

                    </div>
                </div>
                 <div class="clear"></div>
                 </div>
              </div>





              <div>
                <div style={{
                  color: 'rgba(0, 0, 0, 0.870588)',
                  backgroundColor: 'rgb(255, 255, 255)',
                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                boxSizing: 'border-box',
                boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px,rgba(0, 0, 0, 0.117647) 0px 1px 4px',
                 borderRadius: 2,
                textAlign: 'center',
                display: 'inline-block',
                 minWidth: 88,
                 flex: '1 1 0%',
                 margin: '10px 30px'
              }}>
                <a target="_blank" href="http://app.cordially.co/template/vintage" type="button"
              className="link"><div>
                  <div className="get-started-button" className="outerButton">
                    <span className="button">Build Your Wedding Webiste</span>
                  </div></div></a></div>
                </div>
              </figcaption>

            </figure>

          <section className="related">
            <p>We’d be happy to hear from you. Drop us a line at: support@cordially.co.</p>
          </section>
          </div>
        </div>
    );
  }
}

export default About;