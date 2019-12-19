import React from 'react'
import { withSiteData } from 'react-static'
//
import Base from './partials/base_wrapper';

class Disclaimer extends React.Component {
  render() {
    return (
      <div className="disclaimer">
        <div className="content-1">
          <h3>Disclaimer</h3>
        </div>
        <div className="content-3">
          <h3>1. Use of website.</h3>
          <p>You are permitted to use our website for your own purposes and to print and download material from it.
        Unless otherwise noted, all content is licensed under the <a className="inline" href="//creativecommons.org/licenses/by-sa/4.0/" target="_blank">
              Creative Commons Attribution-ShareAlike 4.0 International license (CC BY-SA 4.0)</a>.
    </p>
        </div>

        <div className="content-3">
          <h3>2. Visitor conduct.</h3>
          <p>2.1 With the exception of personally identifiable information, the use of which is covered under our Privacy Statement, any material you send or post to this website shall be considered non-proprietary and not confidential. Unless you advise
        to the contrary we will be free to copy, disclose, distribute, incorporate and otherwise use such material for any and all purposes.</p>
          <p>2.2 When using this website you shall not post or send to or from this website any material for which you have not obtained all necessary consents, is discriminatory, obscene, pornographic, defamatory, liable to incite racial hatred, in breach
        of confidentiality or privacy, which may cause annoyance or inconvenience to others, which encourages or constitutes conduct that would be deemed a criminal offence, give rise to a civil liability, or otherwise is contrary to the law in the
        United Kingdom.</p>
        </div>

        <div className="content-3">
          <h3>3. Site uptime.</h3>
          <p>We take all reasonable steps to ensure that this website is available 24 hours every day, 365 days per year.
        However, websites do sometimes encounter downtime due to server and other technical issues. Therefore, we will
        not be liable if this website is unavailable at any time.
    </p>
        </div>

        <div className="content-3">
          <h3>4. Links to and from other websites.</h3>
          <p>Any links to third party websites located on this website are provided for your convenience only. We have not
        reviewed each third party website and have no responsibility for such third party websites or their content.
    </p>
        </div>

        <div className="content-3">
          <h3>5. Exclusion of liability.</h3>
          <p>We take all reasonable steps to ensure that the information on this website is correct. However, we do not
        guarantee the correctness or completeness of material on this website. Neither we nor any other party (whether
        or not involved in producing, maintaining or delivering this website), shall be liable or responsible for any
        kind of loss or damage that may result to you or a third party as a result of your or their use of our website.
        This exclusion shall include servicing or repair costs and, without limitation, any other direct, indirect or
        consequential loss.
    </p>
        </div>

        <div className="content-3">
          <h3>6. Law and jurisdiction.</h3>
          <p>This Legal Notice shall be governed by and construed in accordance with Scottish law. Any dispute(s) arising in
        connection with this Legal Notice are subject to the exclusive jurisdiction of Scotland.
    </p>
        </div>

        <div className="content-3">
          <h3>7. Our registered office address.</h3>
          <p>MaidSafe.net Limited<br />
            163 Bath Street<br />
            Glasgow<br />
            Scotland<br />
            G2 4SQ<br /><br />
          </p>
          <p>Tel: <a href="tel:+44 (0) 1292317311">+44 (0) 1292317311</a></p>
          <p>Email: <a href="mailto:info@maidsafe.net">info@maidsafe.net</a></p>
        </div>

      </div>
    )
  }
}
export default withSiteData(() => (
  Base(Disclaimer)
));
