import React from 'react';
import { Link } from 'react-static';
import SiteLogo from '../../assets/imgs/site_logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="m-hdr-b">
          <div className="m-hdr-logo">
            <div className="m-hdr-logo-b">
              <img src={SiteLogo} alt="MaidSafe.net logo" />
            </div>
          </div>
          <div className="m-hdr-nav">
            <div className="m-hdr-nav-b">
              <nav>
                <Link to="/">About Us</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
