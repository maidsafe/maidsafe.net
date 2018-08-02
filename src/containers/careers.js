import React from 'react';
import { withSiteData } from 'react-static'
//
import CONST from '../constants';
import Base from './partials/base_wrapper';

class Careers extends React.Component {
  render() {
    return (
      <div className="career">
        <div className="content-1">
          <h3>Join our team</h3>
          <p>
            We are an eclectic and multicultural group of passionate, focussed and
      genuine individuals determined to release great software while making a
      hugely positive impact on the world. If you would like to help, please
      send your CV along with a covering letter detailing why you’re a great
      ﬁt for the position to: <a href="mailto:careers@maidsafe.net">careers@maidsafe.net</a> and we will get back to you
      as soon as we can.
    </p>
        </div>

        <div className="list-content type-5">
          <div className="list-content-b">
            <h4 className="sub-title">Reasons to Work With Us:</h4>
            <ul className="list bullet-5">
              <li>Competitive salary.</li>
              <li>Employee benefit trust scheme.</li>
              <li>Flexibility and the opportunity to work remotely.</li>
              <li>We're trying to change how data is managed on a global scale, join us to be part of something special.</li>
              <li>We're open source and believe in universal and free access to our software.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withSiteData(() => (
  Base(Careers, CONST.meta.career, CONST.nav.CAREER)
));
