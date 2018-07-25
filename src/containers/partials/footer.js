import React from 'react';
import { Link } from 'react-static';
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
                <Link to={CONST.footer.community.forum} target="_blank" />
              </div>
              <div className="app-footer-btns slack">
                <Link to={CONST.footer.community.slack} target="_blank" />
              </div>
              <div className="app-footer-btns youtube">
                <Link to={CONST.footer.community.youTube} target="_blank" />
              </div>
              <div className="app-footer-btns reddit">
                <Link to={CONST.footer.community.reddit} target="_blank" />
              </div>
              <div className="app-footer-btns twitter">
                <Link to={CONST.footer.community.twitter} target="_blank" />
              </div>
              <div className="app-footer-btns meetup">
                <Link to={CONST.footer.community.meetup} target="_blank" />
              </div>
              <div className="app-footer-btns telegram">
                <Link to={CONST.footer.community.telegram} target="_blank" />
              </div>
            </div>
          </div>
          <div className="spliter"></div>
          <div className="app-footer-r bottom">
            <div className="footer-hz-li">
              <ul>
                <li><a href="./terms_and_conditions.html">Terms & Conditions</a></li>
                <li><a href="./disclaimer.html">Disclaimer</a></li>
                <li><a href="./privacy.html">Privacy</a></li>
                <li><a href="./credits.html">Credits</a></li>
                <li>
                  <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
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
