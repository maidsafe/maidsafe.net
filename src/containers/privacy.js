// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

{/*
  *
  * @file
  * This file details the privacy policy for maidsafe.net.
  *
  */}
import React from 'react';
import { withSiteData } from 'react-static';
import Parser from 'html-react-parser';
//
import Base from './partials/base_wrapper';

{/*
  * Class to define the page's intro text.
  * @extends React.Component
  */}
class Intro extends React.Component {
  render() {
    return (
      <div className="content-3">
        <h3 className="title">Introduction</h3>
        <p className="p">MaidSafe takes your privacy seriously.</p>
        <p className="p">This privacy policy describes how and why we obtain and store data which can identify you.</p>
        <p className="p">We may change this policy from time to time and shall notify you on the website when changes have been made.</p>
      </div>
    );
  }
}

{/*
  * Class to define the privacy policy text for any job applicants
  * @extends React.Component
  */}
class JobApplicant extends React.Component {
  constructor() {
    super();
    this.sectionData = [
      {
        head: 'Data controller: MaidSafe.Net Limited',
        para: [
          'As part of any recruitment process, the organisation collects and processes personal data relating to job applicants. The organisation is committed to being transparent about how it collects and uses that data and to meeting its data protection obligations.'
        ]
      },
      {
        head: 'What information does the organisation collect?',
        para: [
          'The organisation collects a range of information about you. This includes:',
          'Your name, address and contact details, including email address and telephone number; Details of your qualifications, skills, experience and employment history; Information about your current level of remuneration, including benefit entitlements; Whether or not you have a disability for which the organisation needs to make reasonable adjustments during the recruitment process; and information about your entitlement to work in the UK.',
          'The organisation may collect this information in a variety of ways. For example, data might be contained in CVs or resumes, obtained from your passport or other identity documents, or collected through interviews or other forms of assessment, including online tests.',
          'The organisation may also collect personal data about you from third parties, such as references supplied by former employers. The organisation will seek information from third parties only once a job offer to you has been made and will inform you that it is doing so.',
          'Data will be stored in a range of different places, on IT systems (including email).'
        ]
      },
      {
        head: 'Why does the organisation process personal data?',
        para: [
          `The organisation needs to process data to take steps at your request prior to entering into a contract with you. In some cases, the organisation needs to process data to ensure that it is complying with its legal obligations. For example, it is required to check a successful applicant's eligibility to work in the UK before employment starts.`,
          `The organisation has a legitimate interest in processing personal data during the recruitment process and for keeping records of the process. Processing data from job applicants allows the organisation to manage the recruitment process, assess and confirm a candidate's suitability for employment and decide to whom to offer a job. The organisation may also need to process data from job applicants to respond to and defend against legal claims.`,
          `The organisation may process special categories of data, such as information about ethnic origin, sexual orientation or religion or belief, to monitor recruitment statistics. It may also collect information about whether or not applicants are disabled to make reasonable adjustments for candidates who have a disability. The organisation processes such information to carry out its obligations and exercise specific rights in relation to employment.`,
          `If your application is unsuccessful, the organisation will keep your personal data on file for a period of 6 months in case there are future employment opportunities for which you may be suited. At the end of that period or once you withdraw your consent, your data is deleted and destroyed.`
        ]
      },
      {
        head: 'Who has access to data?',
        para: [
          `Your information may be shared internally for the purposes of the recruitment exercise. This includes members of the HR team, interviewers involved in the recruitment process and managers in the business area with a vacancy.`,
          `The organisation will not share your data with third parties, unless your application for employment is successful and it makes you an offer of employment. The organisation will then share your data with former employers to obtain references for you.`,
          `Your data may be transferred outside the European Economic Area (EEA) for the purposes of the recruitment exercise as some managers within the business area are located out with the EEA. Data is transferred outside the EEA on the basis of model contract clauses with Google and Slack.`,
        ]
      },
      {
        head: 'How does the organisation protect data?',
        para: [
          `The organisation takes the security of your data seriously. It has internal policies and controls in place to ensure that your data is not lost, accidentally destroyed, misused or disclosed, and is not accessed except by our employees in the proper performance of their duties. The organisation stores all job applicant data on Google Drive where only the people listed above can access and view documents. Hard copies of employee data is stored in a locked cupboard with only Human Resources and Finance having access.`,
        ]
      },
      {
        head: 'For how long does the organisation keep data?',
        para: [
          `If your application for employment is unsuccessful, the organisation will hold your data on file for 6 months. At the end of that period or once you withdraw your consent, your data is deleted or destroyed.`,
          `If your application for employment is successful, personal data gathered during the recruitment process will be transferred to your personnel file and retained during your employment. The periods for which your data will be held will be provided to you in a new privacy notice.`,
        ]
      },
      {
        head: 'Your rights',
        para: [
          `As a data subject, you have a number of rights. You can:`,
          `Access and obtain a copy of your data on request;
          Require the organisation to change incorrect or incomplete data;
          Require the organisation to delete or stop processing your data, for example where the data is no longer necessary for the purposes of processing; and
          Object to the processing of your data where the organisation is relying on its legitimate interests as the legal ground for processing.
          If you would like to exercise any of these rights, please contact <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>.`,
          `If you believe that the organisation has not complied with your data protection rights, you can complain to the Information Commissioner.`,
        ]
      },
      {
        head: 'What if you do not provide personal data?',
        para: [
          `You are under no statutory or contractual obligation to provide data to the organisation during the recruitment process. However, if you do not provide the information, the organisation may not be able to process your application properly or at all.`,
        ]
      },
      {
        head: 'Automated decision-making',
        para: [
          `Recruitment processes are not based solely on automated decision-making.`,
        ]
      },
      {
        head: 'How do I make a complaint?',
        para: [
          `You have the right to make a complaint about anything regarding processing, storage, retention of your data. We would hope to resolve any complaint internally and if you would like to lodge a complaint with us in the first instance please contact <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>. However, you also have the right to lodge a complaint at any time to the Information Commissioner (ICO) in respect of our processing of your personal data. Information can be found at <a href="//www.ico.org.uk">www.ico.org.uk</a>.`,
        ]
      },
      {
        head: 'GDPR',
        para: [
          `In line with the recent changes and the implementation of the General Data Protection Regulations in the EEA you have the right to know what information we hold on you as well as the right to be forgotten. If you would like to know any more about this or anything else in relation to your data please contact us by email at <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>, by telephone on 01292 317311 or by post at 163 Bath Street, Glasgow, Scotland, G2 4SQ.`,
        ]
      },
      {
        head: 'Security',
        para: [
          `Keeping information about you secure is important to us, however no data transmission over the Internet can be guaranteed to be totally secure.`,
          `As a result, whilst we try to protect your personal information, we cannot ensure the security of any information which you send to us, and you do so at your own risk.`,
        ]
      },
      {
        head: 'Alpha Test Phases',
        para: [
          'MaidSafe are building the SAFE Network, the world’s first autonomous and decentralised data network. For more information about how we use your personal information when participating throughout our Alpha phases visit our <a href="https://safenetwork.tech/privacy/">Privacy page</a> on the <a href="https://safenetwork.tech">SAFE Network website</a>.'
        ]
      },
    ];
  }

  getSections(data, i) {
    return (
      <div key={`privacy-section-${i}`}>
        <h4 className="sub-title">{data.head}</h4>
        {
          data.para ? data.para.map((p, i) => (
            Parser(`<p key={privacy-section-para-${i}} className="p">${p}</p>`)
          )) : null
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="content-3">
          <h3 className="title">Job Applicant Privacy Policy</h3>
          {this.sectionData.map((data, i) => this.getSections(data))}
        </div>
      </div>
    );
  }
}

{/*
  * Main class to define the contents of this privacy page
  * @extends React.Component
  */}
class Privacy extends React.Component {
  render() {
    return (
      <div className="privacy">
        <div className="content-1">
          <h3 className="title">Privacy Policy</h3>
        </div>
        <Intro />
        <JobApplicant />
      </div>
    )
  }
}

{/*
  * Export the full page as defined by the Privacy class
  *
  */}
export default withSiteData(() => (
  Base(Privacy)
));
