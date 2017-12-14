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
              		<a href="/template/modern" title="Modern Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/2Hl8Mm5WQkCvNjleUZy5" alt="Modern Wedding Website Theme"/>
                  </a>
              	</div>

              	<div className="thumb-info">
              		<div className="thumb-title">
              	        <div className="thumb-name">
              				<h2><a href="/template/modern" title="Modern Wedding Website Theme">Modern Wedding Website Template</a>
                      <a style={{float: 'right'}} href="/template/modern" target="_blank" title="Launch Website">
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
                  <a href="/template/rustic" title="Rustic Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/cWUxYsqdQricLOSVxW6M" alt="Rustic Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="/template/rustic" title="Romantic Wedding Website Theme">Rustic Wedding Website Template</a>
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
                  <a href="/template/greenery" title="Greenery Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/ogCS07jTq6N79nWyxgMw" alt="Greenery Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="/template/greenery" title="Greenery Wedding Website Theme">Greenery Wedding Wesbite Template</a>
                      <a style={{float: 'right'}} href="/template/greenery" target="_blank" title="Launch Website">
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
                  <a href="/template/vinatge" title="Vinatge Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/l5NHfzKR9HCdl63RbVkQ" alt="Vinatge Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="/template/vinatge" title="Vinatge Wedding Website Theme">Vinatge Theme</a>
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
                  <a href="/template/romantic" title="Romantic Wedding Website Theme">
                    <img src="https://cdn.filestackcontent.com/X9wUF76dSXyrgX3RPzkK" alt="Romantic Wedding Website Theme"/>
                  </a>
                </div>

                <div className="thumb-info">
                  <div className="thumb-title">
                        <div className="thumb-name">
                      <h2><a href="/template/romantic" title="Romantic Wedding Website Theme">Romantic Theme</a>
                      <a style={{float: 'right'}} href="/template/romantic" target="_blank" title="Launch Website">
                      Preview
                      </a></h2>
                    </div>

                    </div>
                </div>
                 <div class="clear"></div>
                 </div>
              </div>







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
