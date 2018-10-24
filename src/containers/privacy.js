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
  * Class to define the cookie policy text
  * @extends React.Component
  */}
class CookiePolicy extends React.Component {
  render() {
    return (
      <div className="content-3">
        <h3 className="title">Cookie Policy</h3>
        <p className="p">MaidSafe.net Limited understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website and we therefore don’t use cookies on maidsafe.net.</p>
        <p className="p">However, if you agree to participate in a test programme, or register to be a developer/contributor on the Alpha Network, a persistent cookie is placed on your computer. This is to prevent the Network being spammed while our spam prevention tools are still being developed. The cookie does not collect personal data about you - only the current session ID so that when the test executable runs it will recognise that the currently registed IP address has a valid invite token.</p>
      </div>
    );
  }
}

{/*
  * Class to define the privacy policy text for the domain maidsafe.net
  * @extends React.Component
  */}
class AlphaPolicy extends React.Component {
  constructor() {
    super();
    this.sectionData = [
      {
        head: 'What information does the organisation collect?',
        para: [
          'During the Alpha phase of the SAFE Network development we record the currently active IP address of your login in order to avoid spamming attempts.',
          'The IP address is recorded only when the “Set Registered IP” or “Update Registered IP” buttons are pressed. The data will be stored on an external server (Digital Ocean).'
        ]
      },
      {
        head: 'Why does the organisation process personal data?',
        para: [
          'The organisation has a legitimate interest in processing personal data (current IP address) in order to ensure that the SAFE Network can be accessed, during the Alpha development phase without being left open to attack by malicious agents.',
          'Collecting IP addresses is a temporary measure but essential at this stage as it acts as a form of spam protection - preventing someone creating thousands of accounts and attacking the Network whilst it is in Alpha stage.',
          'The company will only collect this information if you with your consent if you press the button “Set Registered IP” or “Update Registered IP”.'
        ]
      },
      {
        head: 'Who has access to data?',
        para: [
          'Your information may be shared internally for the purposes of the development of the SAFE Network. This includes members of the QA and Development teams.',
          'When you consent for your IP address to be collected, this will be stored on an external server hosted by Digital Ocean with whom the QA and Development teams have access.'
        ]
      },
      {
        head: 'How does the organisation protect data?',
        para: [
          'The organisation has limited the number of people who are required to have access to login to Digital Ocean.',
          'Digital Ocean also have Security measures in place such as:',
          '- <b>Access Control</b>',
          'Unauthorised persons shall be prevented from gaining physical access to premises, buildings or rooms, where data processing systems are located which process personal data. Exceptions may be granted for the purpose of auditing the facilities to third party auditors as long as they are supervised by DigitalOcean and do not get access to the personal data themselves.',
          '- <b>Systems Access Control</b>',
          'Data processing systems must be prevented from being used without authorization.',
          '- <b>Data Access Control</b>',
          'Persons entitled to use a data processing system shall gain access only to the data to which they have a right of access, and personal data must not be read, copied, modified or removed without authorization in the course of the processing.',
          '- <b>Data Transmission Control</b>',
          'Personal data must not be read, copied, modified or removed without authorization during transfer or storage and it shall be possible to establish to whom personal data was transferred.',
          '- <b>Data entry Control</b>',
          'DigitalOcean shall be able retrospectively to examine and establish whether and by whom personal data have been entered into data processing systems, modified or removed.',
          '- <b>Job Control</b>',
          'Personal data being processed in the performance of a service for the DigitalOcean shall be processed solely in accordance with the services of agreement in place between the DigitalOcean and DigitalOcean and in accordance with the instructions of the DigitalOcean.',
          '- <b>Availability Control</b>',
          'Personal data shall be protected against disclosure, accidental or unauthorized destruction or loss.',
          '- <b>Organizational Requirements</b>',
          'The internal organisation of DigitalOcean shall meet the specific requirements of data protection. In particular, DigitalOcean shall take technical and organizational measures to avoid the accidental mixing of personal data.'
        ]
      },
      {
        head: 'For how long does the organisation keep data?',
        para: [
          'The personal data will be stored until the SAFE Network progresses to Beta Stage.'
        ]
      },
      {
        head: 'Your rights',
        para: [
          'As a data subject, you have a number of rights. You have:',
          '- The right to be informed about Our collection and use of personal data;',
          '- The right of access to the personal data we hold about you;',
          '- The right to rectification if any personal data We hold about you is inaccurate or incomplete;',
          '- The right to be forgotten – i.e. the right to ask Us to delete any personal data We hold about you;',
          '- The right to restrict (i.e. prevent) the processing of your personal data;',
          '- The right to data portability (obtaining a copy of your personal data to re-use with another service or organisation);',
          '- The right to object to Us using your personal data for particular purposes; and',
          '- Rights with respect to automated decision making and profiling.',
          ' ',
          'If you would like to exercise any of these rights, please contact gdpr@maidsafe.net.',
          ' ',
          'If you believe that the organisation has not complied with your data protection rights, you can complain to the Information Commissioner.'
        ]
      },
      {
        head: 'What if you do not provide personal data?',
        para: [
          'You are under no statutory or contractual obligation to provide your IP address to the organisation. However, if you do not provide the information, you will be unable to download our software.'
        ]
      },
    ];
  }

  getSections(data, i) {
    return (
      <div key={`site-privacy-section-${i}`}>
        <h4 className="sub-title">{data.head}</h4>
        {
          data.para ? data.para.map((p, i) => (
            Parser(`<p key={site-privacy-section-para-${i}} className="p">${p}</p>`)
          )) : null
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="content-3">
          <h3 className="title">MaidSafe.net Privacy Policy</h3>
          {this.sectionData.map((data, i) => this.getSections(data))}
        </div>
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
          `In line with the recent changes and the implementation of the General Data Protection Regulations in the EEA you have the right to know what information we hold on you as well as the right to be forgotten. If you would like to know any more about this or anything else in relation to your data please contact us by email at <a href="mailto:gdpr@maidsafe.net">gdpr@maidsafe.net</a>, by telephone on 01292 317311 or by post at 6 Forbes Drive, Heathfield Industrial Estate, Ayr, South Ayrshire, Scotland, KA8 9FG.`,
        ]
      },
      {
        head: 'Security',
        para: [
          `Keeping information about you secure is important to us, however no data transmission over the Internet can be guaranteed to be totally secure.`,
          `As a result, whilst we try to protect your personal information, we cannot ensure the security of any information which you send to us, and you do so at your own risk.`,
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
        <CookiePolicy />
        <AlphaPolicy />
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
