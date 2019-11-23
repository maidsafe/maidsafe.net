import React from 'react'
import { withSiteData } from 'react-static';
//
import Base from './partials/base_wrapper';

class Cookies extends React.Component {
  render() {
    return (
      <div className="cookies">

        <div className="content-1">
          <h3 className="title">Cookies</h3>
        </div>

        <div className="content-3">
          <h3 className="title">No Cookie Policy</h3>
          <p className="p">
            MaidSafe.net Limited understands your privacy is important to you and that you care how your personal data is used. We respect and value the privacy of everyone who visits this website and we therefore don’t use cookies on this website.
          </p>
          <p className="p">
            No session cookie; no persistent cookie; no HttpOnly cookie; no secure cookie; no Third-party cookies. Seriously… NO COOKIES!
          </p>
          <p className="p">
            However, if you agree to participate in a test programme and/or register to be a developer/contributor on the Alpha Network, a session cookie will be  placed on your computer. This is to prevent the test and/or Network being spammed while our spam prevention tools are still being developed. The cookie collects the following information to validate the test session ensuring that the registered IP address has a valid invite token: forum user ID; email address; profile ID and forum avatar image url.
          </p>
        </div>
      </div>
    )
  }
}
export default withSiteData(() => (
  Base(Cookies)
));
