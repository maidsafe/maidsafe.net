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
                <Link to={CONST.footer.community.forum} target="_blank" />
              </div>
              <div className="app-footer-btns riot">
                <Link to={CONST.footer.community.riot} target="_blank" />
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
              <div className="app-footer-btns facebook">
                <Link to={CONST.footer.community.facebook} target="_blank" />
              </div>
              <div className="app-footer-btns medium">
                <Link to={CONST.footer.community.medium} target="_blank" />
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
                  <Link to={CONST.footer.creative_commons} target="_blank">
                    <img src={LicenseButton} alt="License Button" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
