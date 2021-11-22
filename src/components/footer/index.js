import React from "react";
import { Container } from "react-bootstrap";
import {
  Envelope,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer>
      <Container>
        <ul className="nav nav-top">
          <li className="nav-item">
            <a href="#" target="_self" className="nav-link">
              <Envelope className="me-2" />
              Subscribe to our new offers
            </a>
          </li>
          <li className="btn-browse nav-item">
            <a href="#" target="_self" className="nav-link">
              Browse Hotels By Country
            </a>
          </li>
          <div className="navbar-text social-icons">
            <a className="facebook-i" href="/home">
              <div className="unicon">
                <Facebook />
              </div>
            </a>
            <a className="twitter-i" href="/home">
              <div className="unicon">
                <Twitter />
              </div>
            </a>
            <a className="linkedin-i" href="/home">
              <div className="unicon">
                <Linkedin />
              </div>
            </a>
            <a className="instagram-i" href="/home">
              <div className="unicon">
                <Instagram />
              </div>
            </a>
            <a className="youtube-i" href="/home">
              <div className="unicon">
                <Youtube />
              </div>
            </a>
          </div>
        </ul>
        <div className="footer-middle">
          <div className="row">
            <div className="col-md-5">
              <ul className="nav">
                <li className="nav-item">
                  <a href="#" target="_self" className="nav-link btn-custom">
                    Flyin Rewards
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" target="_self" className="nav-link btn-custom">
                    Flyin Wallet
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" target="_self" className="nav-link btn-custom">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" target="_self" className="nav-link btn-custom">
                    Add your Property
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="mobile-app">
                <h5>
                  Flight &amp; Hotels in one place{" "}
                  <span>
                    Download our app now! Just a few clicks and you're done!
                  </span>
                </h5>
                <a href="#" target="_self" className="ios"></a>
                <a href="#" target="_self" className="andriod"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom row no-gutters">
          <ul className="nav col-md-4">
            <li className="nav-item">
              <a href="#" target="_self" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" target="_self" className="nav-link">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a href="#" target="_self" className="nav-link">
                Terms of Use
              </a>
            </li>
            <li className="nav-item">
              <a href="#" target="_self" className="nav-link">
                File a Claim
              </a>
            </li>
            <li className="nav-item">
              <a href="#" target="_self" className="nav-link">
                Careers
              </a>
            </li>
          </ul>
          <div className="col-md-4 text-center">
            {/* <img src="[object Object]" width="300" className="img-fluid" /> */}
          </div>
          <ul className="nav col-md-4 copy-right">
            <li className="navbar-text">© 2020 Saudi Ebreez Company</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
