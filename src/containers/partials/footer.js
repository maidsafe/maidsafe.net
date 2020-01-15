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
//
import CONST from '../../constants';
import LicenseButton from '../../../public/_temp/img/license_button.png';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="app-footer-b">
          <div className="app-footer-r top">
            <div className="app-footer-btns-b clearfix">
              <div className="app-footer-btns community">
                <a href={CONST.footer.community.forum} target="_blank" />
              </div>
              <div className="app-footer-btns riot">
                <a href={CONST.footer.community.riot} target="_blank" />
              </div>
              <div className="app-footer-btns youtube">
                <a href={CONST.footer.community.youTube} target="_blank" />
              </div>
              <div className="app-footer-btns reddit">
                <a href={CONST.footer.community.reddit} target="_blank" />
              </div>
              <div className="app-footer-btns twitter">
                <a href={CONST.footer.community.twitter} target="_blank" />
              </div>
              <div className="app-footer-btns meetup">
                <a href={CONST.footer.community.meetup} target="_blank" />
              </div>
              <div className="app-footer-btns telegram">
                <a href={CONST.footer.community.telegram} target="_blank" />
              </div>
              <div className="app-footer-btns facebook">
                <a href={CONST.footer.community.facebook} target="_blank" />
              </div>
              <div className="app-footer-btns medium">
                <a href={CONST.footer.community.medium} target="_blank" />
              </div>
            </div>
          </div>
          <div className="spliter"></div>
          <div className="app-footer-r bottom">
            <div className="footer-hz-li">
              <ul>
                <li><Link to={CONST.footer.legal.cookies}>Cookies</Link></li>
                <li><Link to={CONST.footer.legal.disclaimer}>Disclaimer</Link></li>
                <li><Link to={CONST.footer.legal.privacy}>Privacy</Link></li>
                <li><Link to={CONST.footer.legal.credits}>Credits</Link></li>
                <li>
                  <a href={CONST.footer.creative_commons} target="_blank">
                    <img src={LicenseButton} alt="License Button" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
