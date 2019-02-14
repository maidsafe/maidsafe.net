import React from 'react';
import { withSiteData } from 'react-static'
//
import CONST from '../constants';
import Base from './partials/base_wrapper';
import Role from './partials/career_role';
import careerContent from './contents/career.content'

class Careers extends React.Component {
  constructor() {
    super();
    this.openRole = this.openRole.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.openRole();
    });
    this.openRole();
  }

  openRole() {
    const hash = location.hash;
    if (!hash) {
      return;
    }

    const id = location.hash.substr(1);
    if (!id) {
      return;
    }
    const ele = document.getElementById(id);
    ele.querySelector('.tbl-cnt').classList.add('open')
  }

  render() {
    return (
      <div className="career">
        <div className="content-1">
          <h3>Join our team</h3>
          <p>
            We are an eclectic and multicultural group of passionate, focussed and
            genuine individuals determined to release great software while making a
            hugely positive impact on the world. We are always interested to hear
            from those who have a passion for making a positive impact through
            the creation of software, especially experts in Rust. If you would like to
            help, please send your CV along with a covering letter (in pdf format)
            to: <a href="mailto:careers@maidsafe.net">careers@maidsafe.net</a> and we will get back to you as soon as we can.
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
        {
          careerContent.length !== 0 ? careerContent.map(careerData => <Role data={careerData} />) : null
        }
      </div>
    );
  }
}

export default withSiteData(() => (
  Base(Careers, CONST.meta.career, CONST.nav.CAREER)
));
