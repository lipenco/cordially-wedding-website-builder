import React, { Component } from 'react';
import './About.scss';
import Layout from "../../layout";
class About extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
      <div className="about">
          <div className="inner">
            <figure>
              <figcaption>
                <h1>Welcome to Cordially, the truly personal wedding website builder</h1>
              <br/>
                <p>
                  With such busy lives, planning a wedding can take a backseat – or become the chore you never wanted it to be. With so much to consider, plan, and arrange,
                  couples often feel like they don’t have the time to give their wedding the personal touch it requires.
                  This what I aim to change.
                </p>
                <p>
                  I created Cordially to ensure every bride and groom has the time, creative control, and flair to make sure their wedding is exactly as they want.
                  No more making do with something just because it’s easy or because you can’t find exactly what you’re looking for; it’s all about saying ‘I do’ in the way you’ve always dreamed.
                </p>
              </figcaption>
              <div className="drawings mac">
                <img className="illustration" src="/img/imac-vintage-wedding-website.png" alt="vintage wedding website" />
              </div>
              <figcaption>
               <h2 style={{paddingTop:60}}>Modern wedding website builder.</h2>

                <p>
                  Inspired by my own wedding, Cordially makes creating wedding websites simple.
                  Never compromising on quality and personalization, the site offers couples much more than traditional wedding sites.
                  Offering full control over the look, feel, and style of your wedding site, Cordially really is breaking the mold.
                  When I got married one year ago, I wanted to utilize technology to create something truly memorable. I built a website that served as both a hub of information for the big day, as well as an invitation for all guests. With a strong focus on guaranteeing each guest was carefully thought about and felt wanted, each guest had their very own site with a personal invitation. Making it feel just as special for guests, and of course look as stunning as if a beautifully calligraphed paper invitation had landed through the letterbox,
                  it provided a perfect base for everyone to find out all about our wedding.
                </p>
                <p>
                  Cordially takes this principal to the next level.
                  Allowing couples to redefine wedding invitations and the idea of wedding stationery,
                  this very modern take on a traditional exercise provides infinite flexibility, while making it easy to keep track of RSVPs
                  and add dynamic directions, instructions, as well as links to maps and venue websites to each invite.
                </p>
              </figcaption>
            </figure>
            <figure>
                <img className="illustration" src="https://www.cordially.co/img/modern-wedding-website.jpg" alt="wedding website creator" />
              <figcaption>
                <h2>Build your truly one-of-a-kind wedding website.</h2>

                <p>
                  Each design has been carefully created to reflect current bridal trends and blend seamlessly with themes.
                  So whether your Big Day is being held in a <a target="_blank" href="http://app.cordially.co/template/rustic">rustic</a> barn in autumn,
                  a flourishing <a target="_blank" className="fancyLink" href="http://app.cordially.co/template/greenery">floral</a> garden in the height of summer,
                  a quirky manor with a <a target="_blank" className="fancyLink" href="http://app.cordially.co/template/vintage">vintage</a> twist, or an all-out sleek and
                  modern hotel just as spring has sprung, there’s a design to reflect your personality and theme.
                </p>

                <p>
                  We offer a 14 day free trial for all new users. So what are you waiting for? Start your wedding journey now.
                </p>
                <p>
                  Cordially yours,
                </p>
                <p>
                  Magdalena Lipinska, founder
                </p>


              <div style={{margin: '30px 0'}}>


              <a href="https://www.cordially.co/template/modern" target='blank'>
              <h3 className="call">Build Your Wedding Website</h3>
              </a>

             </div>
              </figcaption>

            </figure>

          <section className="related">
            <p>We’d be happy to hear from you. Drop us a line at: support@cordially.co.</p>
          </section>
          </div>
        </div>
        </Layout>
    );
  }
}

export default About;
