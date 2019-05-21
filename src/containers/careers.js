import React from 'react';
import { withSiteData } from 'react-static'
//
import CONST from '../constants';
import Base from './partials/base_wrapper';
import Role from './partials/career_role';
import careerContent from './contents/career.content';

// Text for page
import TXT from "./contents/careers"
import TESTI from "./contents/testimonials"

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
      <div className="careers">
        <div className="intro">
          <div className="intro-container">

            <div className="left-panel">
              <p>
                {TXT.intro.para}
                <br/>
                <br/>
                {TXT.cta.para}
                <br/>
                <button className="email-button" type="button" onClick={() => {
                  location.assign('mailto:careers@maidsafe.net');}}>Send email
                </button>
              </p>
            </div>

            <div className="right-panel"/>
          </div>
        </div>

        <div className="benefits">
          <div className="benefits-b content-1">
            <h3 className="sub-title">{TXT.why.title}</h3>
          </div>
          <div className="benefits-b">
            <div className="benefit-i flexible">{TXT.why.flexible}</div>
            <div className="benefit-i remote">{TXT.why.remote}</div>
            <div className="benefit-i build">{TXT.why.build}</div>
            <div className="benefit-i workwith">{TXT.why.workwith}</div>
            <div className="benefit-i opensrc">{TXT.why.opensrc}</div>
          </div>
        </div>

        <div className="photostrip"/>

        <div className="benefits">
          <div className="benefits-b content-1">
            <h3 className="sub-title">{TXT.benefits.title}</h3>
          </div>
          <div className="benefits-b">
            <div className="benefit-i holiday">{TXT.benefits.holiday}</div>
            <div className="benefit-i pension">{TXT.benefits.pension}</div>
            <div className="benefit-i ebt">{TXT.benefits.ebt}</div>
            <div className="benefit-i cycle">{TXT.benefits.cycle}</div>
            <div className="benefit-i chillout">{TXT.benefits.chillout}</div>
            <div className="benefit-i casual">{TXT.benefits.casual}</div>
          </div>
        </div>

        <div className="testimonials content-1">
          <h3>{TESTI.title}</h3>

            <div className="testimonials-b">
              <div className="quote"><p>"<i>{TESTI.T1.quote}</i>"</p><p><b>{TESTI.T1.name}</b>, {TESTI.T1.base}</p></div>
              <div className="face spandan"/>
            </div>

            <div className="testimonials-b">
              <div className="face gabriel"/>
              <div className="quote"><p>"<i>{TESTI.T2.quote}</i>"</p><p><b>{TESTI.T2.name}</b>, {TESTI.T2.base}</p></div>
            </div>

            <div className="testimonials-b">
              <div className="quote"><p>"<i>{TESTI.T3.quote}</i>"</p><p><b>{TESTI.T3.name}</b>, {TESTI.T3.base}</p></div>
              <div className="face marcin"/>
            </div>

            <div className="testimonials-b">
              <div className="face hunter"/>
              <div className="quote"><p>"<i>{TESTI.T4.quote}</i>"</p><p><b>{TESTI.T4.name}</b>, {TESTI.T4.base}</p></div>
            </div>

        </div>
      </div>
    );
  }
}

export default withSiteData(() => (
  Base(Careers, CONST.meta.career, CONST.nav.CAREER)
));
