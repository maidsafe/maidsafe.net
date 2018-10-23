import React from 'react'
import { withSiteData } from 'react-static'
//
import Base from './partials/base_wrapper';

class Credits extends React.Component {
  render() {
    return (
      <div className="credits">
        <div className="credits-page">
          <div className="content-1">
            <h3>Credits</h3>
          </div>

          <div className="content-3">
            <p>
              MaidSafe would like to thank the following companies who have either provided their services free of charge or
            at a reduced cost on the basis that the SAFE network is open source. Collaboration is one of the many benefits
            of working within the open source community and it is great that these companies, while proprietary themselves,
            have embraced this spirit.
        </p>
          </div>
          <div className="content-3">
            <div className="row">
              <img src="/_temp/img/third-party-logo/advanced-installer-logo.jpg" alt="Advanced Installer" className="credits-logo" />
              <div className="card">
                <h3>Advanced Installer</h3>
                <p>
                  Powerful and easy to use Windows Installer authoring tool. Install, update and configure your products
                    safely, securely and reliably.
                </p>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="row">
              <img src="/_temp/img/third-party-logo/atlassian-jira-logo.jpg" className="credits-logo" alt="JIRA" />
              <div className="card">
                <h3>Atlassian JIRA</h3>
                <p>
                  JIRA is the tracker for teams planning and building great projects. Thousands of teams choose JIRA to
                    capture and organize issues, assign work and follow team activity.
                </p>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="row">
              <img src="/_temp/img/third-party-logo/github-octocat.png" className="credits-logo" alt="GitHub" />
              <div className="card">
                <h3>GitHub</h3>
                <p>
                  Powerful collaboration, code review and code management for open source and private projects.
                </p>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="row">
              <img src="/_temp/img/third-party-logo/jetbrains-logo.png" className="credits-logo" alt="Jetbrains" />
              <div className="card">
                <h3>Jetbrains</h3>
                <p>
                  Providing developers with smart, professional tools that help them write clean, quality code and deliver
                    better software faster.
                </p>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="row">
              <img src="/_temp/img/third-party-logo/xamarin-logo.png" className="credits-logo" alt="Xamarin" />
              <div className="card">
                <h3>Xamarin</h3>
                <p>
                  A modern programming language, powerful tools, an efficient and delightful workflow and the power to
                    create the best user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default withSiteData(() => (
  Base(Credits)
));

