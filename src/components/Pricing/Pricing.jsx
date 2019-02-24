import React, { Component } from "react";
import "./Pricing.scss";

class Pricing extends Component {
  render() {
    return (
      <div className="about">
        <div className="inner">
          <h1>Build your stunning wedding website. Try it for free.</h1>
          <h4>
            Try it for free up to 5 invited guests. No reccuring payments. Send
            "Save the date" as soon as you want without worrring about the cost.
          </h4>
          <div
            className="md-grid md-cell--12 align-spaced pricing pricing--karma"
            style={{ padding: "10px 0" }}
          >
            <div className="pricing__item md-grid md-cell md-cell--4">
              <h3 className="pricing__title">Free</h3>
              <p className="pricing__sentence">With branding</p>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>
                <span style={{ textDecoration: "line-through" }}>49</span>

                <span
                  style={{
                    top: 0,
                    color: "green",
                    position: "absolute"
                  }}
                >
                  <span className="pricing__currency">$</span>
                  0
                </span>
                <span className="pricing__period">/ 1 website</span>
              </div>
              <ul className="pricing__feature-list">
                <li className="pricing__feature">Unlimited invitations</li>
                <li className="pricing__feature">No time limit</li>
                <li className="pricing__feature">No recurring payments</li>
                <li className="pricing__feature">
                  Sharing with COLLABORATATOS
                </li>
                <li className="pricing__feature">
                  All templates to choose from
                </li>
                <li className="pricing__feature">
                  Website footer with cordially.co branding
                </li>
              </ul>
            </div>
            <div className="pricing__item md-grid md-cell md-cell--4">
              <h3 className="pricing__title">Standard</h3>
              <p className="pricing__sentence">No Branding</p>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>79<span className="pricing__period">/ 1 website</span>
              </div>
              <ul className="pricing__feature-list">
                <li className="pricing__feature">Unlimited invitations</li>
                <li className="pricing__feature">No time limit</li>
                <li className="pricing__feature">No recurring payments</li>
                <li className="pricing__feature">
                  Sharing with COLLABORATATOS
                </li>
                <li className="pricing__feature">
                  All templates to choose from
                </li>
                <li className="pricing__feature" style={{ fontWeight: "bold" }}>
                  No cordially branding in the footer
                </li>
              </ul>
            </div>
            <div className="pricing__item md-grid md-cell md-cell--4">
              <h3 className="pricing__title">Premium</h3>
              <p className="pricing__sentence">Custom Domain</p>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>84<span className="pricing__period">/ 1 website</span>
              </div>
              <ul className="pricing__feature-list">
                <li className="pricing__feature">Unlimited invitations</li>
                <li className="pricing__feature">No time limit</li>
                <li className="pricing__feature">No recurring payments</li>
                <li className="pricing__feature">
                  Sharing with COLLABORATATOS
                </li>
                <li className="pricing__feature">
                  All templates to choose from
                </li>
                <li className="pricing__feature" style={{ fontWeight: "bold" }}>
                  No cordially branding in the footer
                </li>
                <li className="pricing__feature" style={{ fontWeight: "bold" }}>
                  Custom domain for 1 year
                </li>
              </ul>
            </div>
          </div>
          <div style={{ margin: "30px 0", textAlign: "center" }}>
            <p>
              {" "}
              You can relax knowing you're covered by a full 30 Day Money Back
              Guarantee!
            </p>
            <br />
            <img src="https://cdn.filestackcontent.com/JdtFr2qtRDG3uKvhSdQs" />
            <br />

            <a href="https://www.cordially.co/template/modern" target="blank">
              <h3 className="call">Build Your Wedding Website</h3>
            </a>
            <h3 style={{ textAlign: "center", paddingTop: 100 }}>
              As featured in:
            </h3>
            <img
              style={{ width: "100%", padding: "20px 50px 0" }}
              src="https://cdn.filestackcontent.com/zw0pwdfRRK2ye6wm9ZQ4"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
