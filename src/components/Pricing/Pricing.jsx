import React, { Component } from 'react';
import './Pricing.scss';

class Pricing extends Component {
  render() {
    return (
      <div className="about">
        <div className="inner">
          <h1>Build your stunning wedding website. Try it for free.</h1>
          <h4>Try it for free up to 5 invited guests. No reccuring payments. Send "Save the date" as soon as you want without worrring about the cost.</h4>
          <div className='md-grid md-cell--12 align-spaced pricing pricing--karma' style={{padding: '10px 0'}}>
                 <div className="pricing__item md-grid md-cell md-cell--6">
                     <h3 className="pricing__title">Discounted</h3>
                     <p className="pricing__sentence">With branding</p>
                     <div className="pricing__price"><span className="pricing__currency">$</span>49<span className="pricing__period">/ donation</span></div>
                     <ul className="pricing__feature-list">
                         <li className="pricing__feature">Unlimited invitations</li>
                         <li className="pricing__feature">No time limit</li>
                         <li className="pricing__feature">No recurring payments</li>
                         <li className="pricing__feature">Sharing with COLLABORATATOS</li>
                         <li className="pricing__feature">All templates to choose from</li>
                         <li className="pricing__feature">Website footer with codially.co branding</li>
                         <li className="pricing__feature" style={{visibility: 'hidden'}}>Possibility to add your own domain</li>
                         <li className="pricing__feature" style={{visibility: 'hidden'}}>Visible on google search</li>

                     </ul>

                 </div>
                 <div className="pricing__item md-grid md-cell md-cell--6">
                     <h3 className="pricing__title">Standard</h3>
                     <p className="pricing__sentence">No Branding</p>
                     <div className="pricing__price"><span className="pricing__currency">$</span>79<span className="pricing__period">/ 1 website</span></div>
                     <ul className="pricing__feature-list">
                         <li className="pricing__feature">Unlimited invitations</li>
                         <li className="pricing__feature">No time limit</li>
                         <li className="pricing__feature">No recurring payments</li>
                         <li className="pricing__feature">Sharing with COLLABORATATOS</li>
                         <li className="pricing__feature">All templates to choose from</li>
                         <li className="pricing__feature" style={{fontWeight: 'bold'}}>No cordially branding in the footer</li>
                         <li className="pricing__feature" style={{fontWeight: 'bold'}}>Visible on google search</li>
                         <li className="pricing__feature" style={{fontWeight: 'bold'}}>Possibility to add your own domain</li>
                     </ul>



                 </div>

                 <div style={{width: '100%'}}>
                   <div style={{
                     color: 'rgba(0, 0, 0, 0.870588)',
                     textAlign: 'center',
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
                   <a target="_blank" href="http://app.cordially.co/template/vintage" tabindex="0" type="button"
                 className="link"><div>
                     <div className="get-started-button" className="outerButton">
                       <span className="button">Build Your Wedding Webiste Now</span>
                     </div></div></a></div>
                   </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Pricing;
