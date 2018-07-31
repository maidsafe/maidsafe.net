import React from 'react'
import { withSiteData } from 'react-static';
//
import Base from './partials/base_wrapper';

class Terms extends React.Component {
  render() {
    return (
      <div className="terms">

        <div className="content-1">
          <h3 className="title">Terms and Conditions</h3>
        </div>

        <div className="content-3">
          <h3 className="title">No Cookie Policy</h3>
          <p className="p">
            MaidSafe.net Limited understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website so with that in mind, we don’t use cookies on maidsafe.net.
          </p>
          <p className="p">
          No session cookie; no persistent cookie; no HttpOnly cookie; no secure cookie; no Third-party cookies. Seriously… NO COOKIES!
          </p>
        </div>
      </div>
    )
  }
}
export default withSiteData(() => (
  Base(Terms)
));
