// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

import React from 'react';
import { Link } from 'react-router-dom';
import Classnames from 'classnames';
//
import CONST from '../../constants';
import SiteLogo from '../../assets/imgs/site_logo.svg';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  toggleNav(e) {
    const mainNav = document.getElementById('MainNav');
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      return;
    }
    mainNav.classList.add('open');
  }
  render() {
    return (
      <div className="m-hdr">
        <div className="m-hdr-b">
          <div className="m-hdr-logo">
            <div className="m-hdr-logo-b">
              <Link to="/"><img src={SiteLogo} alt="MaidSafe.net logo" /></Link>
            </div>
          </div>
          <div className="m-hdr-nav" id="MainNav">
            <div className="m-hdr-nav-b">
              <div className="m-hdr-nav-mob"><button className="btn" onClick={() => {this.toggleNav()}}>Menu</button></div>
              <nav>
                <Link className={Classnames({
                  selected: this.props.page === CONST.nav.ABOUT
                })} to="/about_us">About Us</Link>
                <Link className={Classnames({
                  selected: this.props.page === CONST.nav.CAREER
                })} to="/careers">Careers</Link>
                <Link className={Classnames({
                  selected: this.props.page === CONST.nav.CONTACT
                })} to="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
