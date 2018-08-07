import React from 'react';
import { withSiteData } from 'react-static'
//
import CONST from '../constants';
import Base from './partials/base_wrapper';

class Roles extends React.Component {
  constructor() {
    super();
    this.onClickRole = this.onClickRole.bind(this);
  }

  onClickRole(id) {
    location.replace(`#${id}`)
  }

  render() {
    const { data } = this.props;
    const { title, desc, details } = data;
    const id = title ? title.toLocaleLowerCase().replace(/\W/g, '_') : ``;
    const self = this;
    return (
      <div className="list-content type-5">
        <div className="list-content-b">
          <div className="tbl-view">
            <div className="tbl-c" id={id}>
              <h3 className="title"><a onClick={e => {
                e.preventDefault();
                self.onClickRole(id);
              }} href={`#${id}`}>{title}</a></h3>
              <div className='tbl-cnt'>
                <p className="p desc">{desc}</p>
                {details && details.length > 0 ? details.map((detail, i) => (
                  <div key={`career-detail-${i}`}>
                    <h4 className="sub-title">{detail.head}</h4>
                    {detail['sub-head'] ? (<h4 className="sub-title-i">{detail['sub-head']}</h4>) : null}
                    <ul className="list bullet-5">
                      {
                        detail.list ? detail.list.map((ls, j) => (
                          <li key={`details-list-${j}`}>{ls}</li>
                        )) : null
                      }
                    </ul>
                  </div>
                )) : null}
                <div className="btn-b">
                  <a href={`mailto:careers@maidsafe.net?subject=${encodeURIComponent(title)}`} className="al-btn invert">Apply for this role</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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

        <Roles data={{
          title: `Software Engineer`,
          desc: `This is an exciting yet demanding role, based either remotely or at MaidSafe’s Scottish HQ, working within the global technology sector and specifically well suited to individuals passionate and knowledgeable about autonomous networks, blockchain, distributed computing, decentralisation and cryptocurrencies.`,
          details: [
            {
              head: `Role and Responsibilities`,
              list: [
                `Implementing the code as per the network design`,
                `Participate in online technical discussions on Slack and and on the community run forum`,
                `Aid the production of clear and user-focussed documentation`,
                `Work as part of a team and participate in daily stand-ups`,
                `Participate in testing and integration providing feedback, when required`,
                `Maintain an excellent knowledge of the languages, tools and methodologies used by the company`,
                `Participate in the continuous improvement and evolution of the standards and best practises`,
                `Work independently, handle multiple tasks simultaneously and adapt quickly to change`,
              ]
            }, {
              head: `Essential Requirements`,
              list: [
                `Experience programming in any systems level language e.g. C, C++, Rust.`,
                `3 + years commercial experience of working to tight deadlines as part of a team.`,
                `Experience in delivering APIs`,
                `Experience working with distributed technology such as Distributed Hash Tables (DHTs), and/or P2P networks`,
                `Skilled in producing clear and user-focused documentation.`,
                `Working independently and as part of a team`,
                `Excellent communication skills (we are a geographically distributed team)`
              ]
            }, {
              head: `Desirable Skills:`,
              'sub-head': `(These are nice-to-haves - don’t be put oﬀ applying!)`,
              list: [
                `Experience working within iterative Agile development process.`,
                `Commits have been made to veriﬁable open source repositories.`,
                `Experience using Rust is a bonus.`
              ]
            }
          ]
        }} />

        <Roles data={{
          title: `Rust Engineer`,
          desc: `This is an exciting yet demanding role, based either remotely or at MaidSafe’s Scottish HQ, working within the global technology sector and specifically well suited to individuals passionate and knowledgeable about autonomous networks, blockchain, distributed computing, decentralisation and cryptocurrencies`,
          details: [
            {
              head: `Role and Responsibilities`,
              list: [
                `Implementing the code as per the network design`,
                `Participate in online technical discussions on Slack and and on the community run forum`,
                `Aid the production of clear and user-focussed documentation`,
                `Work as part of a team and participate in daily stand-ups`,
                `Participate in testing and integration providing feedback, when required`,
                `Maintain an excellent knowledge of the languages, tools and methodologies used by the company`,
                `Participate in the continuous improvement and evolution of the standards and best practises`,
                `Work independently, handle multiple tasks simultaneously and adapt quickly to change`,
              ]
            }, {
              head: `Essential Requirements`,
              list: [
                `Experience of programming in Rust (preferably 1 year minimum)`,
                `Commercial experience of working to tight deadlines`,
                `Possess good analytical, problem solving and debugging skills`,
                `Skilled in producing clear and focussed documentation`,
                `Working independently and as part of a team`,
                `Excellent communication skills (we are a geographically distributed team)`,
              ]
            }, {
              head: `Desirable Skills:`,
              'sub-head': `(These are nice-to-haves - don’t be put oﬀ applying!)`,
              list: [
                `Working within a remote team`,
                `Experience of working with distributed networks`,
                `Experience working within Interactive Agile development process`,
                `Commits have been made to verifiable open source repositories`,
                `Experience in either Ruby, C# or Java (in addition to Rust)`,
              ]
            }
          ]
        }} />

        <Roles data={{
          title: `Jenkins/Dev Ops`,
          desc: `This is an exciting yet demanding role, based at MaidSafe’s Scottish HQ, working within the global technology sector. This is a brand new role created to join our newly formed Test and Release team and is well suited to individuals passionate and knowledgeable about autonomous networks, blockchain, distributed computing, decentralisation and cryptocurrencies.`,
          details: [
            {
              head: `Role and Responsibilities`,
              list: [
                `Have sole responsibility for the setup of Jenkins to provide continuous integration and continuous delivery across a range of varying Github repositories.`,
                `Manage and maintain the Jenkins server and agents after initial setup`,
                `Write and maintain repository specific CI scripts`,
                `Connect Jira and Slack to Jenkins for workflow management and visibility`,
                `Use Jenkins to streamline and automate the build and deployment processes`,
                `Work closely with our front and back end teams to define/add/update CI and CD requirements and scripts`,
                `Work closely with our front and back end teams to keep on top of potential threats/patches`,
                `Support all of our engineers to improve overall scalability, stability and reliability`,
              ]
            }, {
              head: `Requirements`,
              list: [
                `Specialist in the setup and maintenance of Jenkins for CI and CD`,
                `Experience of Jenkins testing for Linux, OS X, Windows and Android environments`,
                `Background in software engineering (e.g. QA, developer, DevOps)`,
                `Expert at scripting tasks (Python, Bash, PowerShell or other)`,
                `Network experience - setup, configuration, deployment.`,
                `Excellent communication skills`,
                `Experience with Travis and Appveyor`,
              ]
            }, {
              head: `Desirable Skills:`,
              'sub-head': `(These are nice-to-haves - don’t be put oﬀ applying!)`,
              list: [
                `Working within a remote team`,
                `Experience of working with distributed networks`,
                `Experience working within Interactive Agile development process`,
                `Commits have been made to verifiable open source repositories`,
                `Experience in either Ruby, C# or Java (in addition to Rust)`,
              ]
            }
          ]
        }} />

        <Roles data={{
          title: `Software Test Engineer`,
          desc: `This is an exciting yet demanding role, based at MaidSafe’s Scottish HQ, working within the global technology sector. This is a brand new role created to join our newly formed Test and Release team and is well suited to individuals passionate and knowledgeable about autonomous networks, blockchain, distributed computing, decentralisation and cryptocurrencies.`,
          details: [
            {
              head: `Duties`,
              list: [
                `Build, test and review code from GitHub repositories`,
                `Work closely with our remote front and back end teams to plan and test a variety of technologies from the front end, through the API, to the back end`,
                `Report bugs, push and track bugs to be solved`,
                `Document a variety of processes and create how-to guides `,
                `Write and script test tools to automate/script repetitive tasks`,
                `Investigating new test tools and processes`,
                `Work on a number of tasks and projects simultaneously`,
                `Work within an Agile environment`,
                `Ad hoc duties as required`,
              ]
            }, {
              head: `Requirements`,
              list: [
                `A minimum of 2 years experience in software testing`,
                `Experience of using Python, Bash, PowerShell or other `,
                `Ability to read code`,
                `Comfortable with and have an interest in new and emerging technologies`,
                `Excellent verbal and written skills`,
                `Ability to multitask and prioritise workload`,
                `Comfortable using terminal commands`,
              ]
            }, {
              head: `Desirable`,
              'sub-head': `(These are nice-to-haves - don’t be put oﬀ applying!)`,
              list: [
                `Knowledge/experience of CI/CD is a big plus.`,
                `Network experience - setup, configuration, deployment.`,
                `Comfortable utilising JIRA & Confluence`,
              ]
            }
          ]
        }} />

      </div>
    );
  }
}

export default withSiteData(() => (
  Base(Careers, CONST.meta.career, CONST.nav.CAREER)
));
