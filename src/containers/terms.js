import React from 'react'
import { withSiteData } from 'react-static';
import Parser from 'html-react-parser';
//
import Base from './partials/base_wrapper';

class TermsTable extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="tbl">
        <table>
          {
            data ? data.map((row, i) => {
              if (row.isHeader) {
                return (
                  <tr>
                    {row.data ? row.data.map((header, i) => (
                      <th width={header.width}>{header}</th>
                    )) : null}
                  </tr>
                )
              }
              return (
                <tr>
                  {
                    row ? row.map((col, colIndex) => {
                      if (typeof col !== 'string') {
                        return (
                          <td colSpan={col.colSpan}>
                            <TermsTable data={col.data} />
                          </td>
                        );
                      }
                      return (<td>{Parser(col)}</td>);
                    }) : null
                  }
                </tr>
              )
            }) : null
          }
        </table>
      </div>
    );
  }
}

class Terms extends React.Component {
  constructor() {
    super();
    this.definitionData = [
      [
        `Cookie`,
        `means a small file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site;`
      ], [
        `Cookie Law`,
        `means the relevant parts of the Privacy and Electronic Communications (EC Directive) Regulations 2003 and of EU Regulation 2016/679 General Data Protection Regulation (“GDPR”);`
      ], [
        `personal data`,
        `means any and all data that relates to an identifiable person who can be directly or indirectly identified from that data, as defined by EU Regulation 2016/679 General Data Protection Regulation (“GDPR”); and`
      ], [
        `We/Us/Our`,
        `means  MaidSafe.net Limited, a limited company registered in Scotland under company number  SC297540, whose registered address is 6 Forbes Drive, Heathfield Industrial Estate, Ayr, South Ayrshire, Scotland, KA8 9FG.`
      ], [
        `We/Us/Our`,
        `means  MaidSafe.net Limited, a limited company registered in Scotland under company number  SC297540, whose registered address is 6 Forbes Drive, Heathfield Industrial Estate, Ayr, South Ayrshire, Scotland, KA8 9FG.`
      ]
    ];

    this.aboutUsData = [
      [
        `2.1`,
        `Our Site is owned and operated by MaidSafe.Net Limited, a limited company registered in Scotland under company number  SC297540, whose registered address is 6 Forbes Drive, Heathfield Industrial Estate, Ayr, South Ayrshire, Scotland, KA8 9FG.`
      ], [
        `2.2`,
        `Our VAT number is GB 889060877.`
      ], [
        `2.3`,
        `The person responsible for data protection can be contacted by email at gdpr@maidsafe.net, by telephone on 01292 317311 or by post at 6 Forbes Drive, Heathfield Industrial Estate, Ayr, South Ayrshire, Scotland, KA8 9FG.`
      ]
    ];

    this.siteCookiesData = [
      [
        `3.1`,
        `By using Our Site, you may receive certain third party Cookies on your computer or device. Third party Cookies are those placed by websites, services, and/or parties other than Us. Third party Cookies are used on Our Site for  social media tracking. For more details, please refer to section 4 below.`
      ], [
        `3.2`,
        `All Cookies used by and on Our Site are used in accordance with current Cookie Law. We may use some or all of the following types of Cookie:`
      ], [
        `3.3`,
        `Cookies on Our Site are not permanent and will expire as indicated in the table below.`,
      ], [
        {
          innerTable: true,
          colSpan: 2,
          data: [
            [
              `3.3.1`,
              `Strictly Necessary Cookies`,
              `A Cookie falls into this category if it is essential to the operation of Our Site, supporting functions such as logging in, your shopping basket, and payment transactions.`
            ], [
              `3.3.2`,
              `Analytics Cookies`,
              `It is important for Us to understand how you use Our Site, for example, how efficiently you are able to navigate around it, and what features you use. Analytics Cookies enable us to gather this information, helping Us to improve Our Site and your experience of it.`
            ], [
              `3.3.3`,
              `Functionality Cookies`,
              `Functionality Cookies enable Us to provide additional functions to you on Our Site such as personalisation and remembering your saved preferences. Some functionality Cookies may also be strictly necessary Cookies, but not all necessarily fall into that category.`
            ]
          ]
        }
      ], [
        `3.4`,
        `For more details of the personal data that We collect and use, the measures we have in place to protect personal data, your legal rights, and our legal obligations, please refer to our <a href="/privacy">Privacy Policy</a>.`
      ], [
        `3.5`,
        `For more specific details of the Cookies that We use, please refer to the table below.`
      ]
    ];

    this.cookiesWeUse = [
      [
        `4.1`,
        `The following third party Cookies may be placed on your computer or device:`
      ], [
        {
          innerTable: true,
          colSpan: 2,
          data: [
            {
              isHeader: true,
              width: `15%`,
              data: [
                `Name of Cookie`,
                `Purpose & Type`,
                `Provider`,
                `Strictly Necessary`,
                `Expiry Date`
              ]
            },
            [
              `SID`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. This cookie is used by Google in combination with HSID to verify a Google user account and most recent login time.`,
              `.youtube.com`,
              `No`,
              `10/27/19`
            ], [
              `HSID`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. Used by Google in combination with SID to verify Google user account and most recent login time`,
              `.youtube.com`,
              ``,
              `10/27/19`
            ], [
              `auth_token`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. Twitter does not currently provide information on the use of specific cookies.`,
              `.twitter.com`,
              `No`,
              `6/20/33`
            ], [
              `demographics`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. Most likely used for demographic profiling and targeting for advertising`,
              `.youtube.com`,
              `No`,
              `4/20/19`
            ], [
              `APISID`,
              `This domain is owned by Google Inc. Although Google is primarily known as a search engine, the company provides a diverse range of products and services. Its main source of revenue however is advertising. Google tracks users extensively both through its own products and sites, and the numerous technologies embedded into many millions of websites around the world. It uses the data gathered from most of these services to profile the interests of web users and sell advertising space to organisations based on such interest profiles as well as aligning adverts to the content on the pages where its customer's adverts appear.`,
              `.google.com`,
              `No`,
              `10/27/19`
            ], [
              `SSID`,
              `This domain is owned by Google Inc. Although Google is primarily known as a search engine, the company provides a diverse range of products and services. Its main source of revenue however is advertising. Google tracks users extensively both through its own products and sites, and the numerous technologies embedded into many millions of websites around the world. It uses the data gathered from most of these services to profile the interests of web users and sell advertising space to organisations based on such interest profiles as well as aligning adverts to the content on the pages where its customer's adverts appear. `,
              `.google.com`,
              `No`,
              `10/27/19`
            ], [
              `APISID`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. `,
              `.youtube.com`,
              `No`,
              `10/27/19`
            ], [
              `PREF`,
              `This domain is owned by Google Inc. Although Google is primarily known as a search engine, the company provides a diverse range of products and services. Its main source of revenue however is advertising. Google tracks users extensively both through its own products and sites, and the numerous technologies embedded into many millions of websites around the world. It uses the data gathered from most of these services to profile the interests of web users and sell advertising space to organisations based on such interest profiles as well as aligning adverts to the content on the pages where its customer's adverts appear. This is a common Google cookie, used across several of their services. Stores user preference and can be used to personalise ads on google searches`,
              `.youtube.com`,
              `No`,
              `10/27/19`
            ], [
              `twll`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. Twitter does not currently provide information on the use of specific cookies.`,
              `.twitter.com`,
              `No`,
              `6/21/23`
            ], [
              `lang`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services. Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. `,
              `syndication.twitter.com`,
              `No`,
              ``
            ], [
              `secure_session`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. Twitter does not currently provide information on the use of specific cookies.`,
              `.twitter.com`,
              `No`,
              `6/20/33`
            ], [
              `guest_id`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. Twitter does not currently provide information on the use of specific cookies.`,
              `.twitter.com`,
              `No`,
              `10/27/19`
            ], [
              `SSID`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. `,
              `.youtube.com`,
              `No`,
              `10/27/19`
            ], [
              `__utma`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. `,
              `.twitter.com`,
              `No`,
              `10/27/19`
            ], [
              `LOGIN_INFO`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. `,
              `.youtube.com`,
              `No`,
              `10/27/19`
            ], [
              `SID`,
              `This domain is owned by Google Inc. Although Google is primarily known as a search engine, the company provides a diverse range of products and services. Its main source of revenue however is advertising. Google tracks users extensively both through its own products and sites, and the numerous technologies embedded into many millions of websites around the world. It uses the data gathered from most of these services to profile the interests of web users and sell advertising space to organisations based on such interest profiles as well as aligning adverts to the content on the pages where its customer's adverts appear. This cookie is used by Google in combination with HSID to verify a Google user account and most recent login time.`,
              `.google.com`,
              `No`,
              `10/27/19`
            ], [
              `SAPISID`,
              `This domain is owned by Google Inc. Although Google is primarily known as a search engine, the company provides a diverse range of products and services. Its main source of revenue however is advertising. Google tracks users extensively both through its own products and sites, and the numerous technologies embedded into many millions of websites around the world. It uses the data gathered from most of these services to profile the interests of web users and sell advertising space to organisations based on such interest profiles as well as aligning adverts to the content on the pages where its customer's adverts appear. `,
              `.google.com`,
              `No`,
              `10/27/19`
            ], [
              `YSC`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. `,
              `.youtube.com`,
              `No`,
              ``
            ], [
              `remember_checked`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. Twitter does not currently provide information on the use of specific cookies.`,
              `.twitter.com`,
              `No`,
              `6/21/23`
            ], [
              `remember_checked_on`,
              `This domain is owned by Twitter. The main business activity is: Social Networking Services.  Where twitter acts as a third party host, it collects data through a range of plug-ins and integrations, that is primarily used for tracking and targeting. `,
              `.twitter.com`,
              `No`,
              `6/21/23`
            ], [
              `id`,
              `This domain is owned by Doubleclick (Google). The main business activity is: Doubleclick is Google’s real time bidding advertising exchange `,
              `.doubleclick.net`,
              `No`,
              `10/27/19`
            ], [
              `HSID`,
              `This domain is owned by Google Inc. Although Google is primarily known as a search engine, the company provides a diverse range of products and services. Its main source of revenue however is advertising. Google tracks users extensively both through its own products and sites, and the numerous technologies embedded into many millions of websites around the world. It uses the data gathered from most of these services to profile the interests of web users and sell advertising space to organisations based on such interest profiles as well as aligning adverts to the content on the pages where its customer's adverts appear. Used by Google in combination with SID to verify Google user account and most recent login time`,
              `.google.com`,
              `No`,
              `10/27/19`
            ], [
              `SAPISID`,
              `YouTube is a Google owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. `,
              `.youtube.com`,
              `No`,
              `10/27/19`
            ],
          ]
        }
      ]
    ];
    this.consertData = [
      [
        `5.1`,
        `Before Cookies are placed on your computer or device, you will be shown a  cookie banner pop up requesting your consent to set those Cookies. By giving your consent to the placing of Cookies you are enabling Us to provide the best possible experience and service to you. You may, if you wish, deny consent to the placing of Cookies unless those Cookies are strictly necessary; however certain features of Our Site may not function fully or as intended.`
      ], [
        `5.2`,
        `In addition to the controls that We provide, you can choose to enable or disable Cookies in your internet browser. Most internet browsers also enable you to choose whether you wish to disable all Cookies or only third party Cookies. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser or the documentation that came with your device.`
      ], [
        `5.3`,
        `The links below provide instructions on how to control Cookies in all mainstream browsers:`
      ], [
        `5.3.1`,
        `Google Chrome: <a href="//support.google.com/chrome/answer/95647?hl=en-GB">https://support.google.com/chrome/answer/95647?hl=en-GB</a>`
      ], [
        `5.3.2`,
        `Microsoft Internet Explorer: <a href="//support.microsoft.com/en-us/kb/278835">https://support.microsoft.com/en-us/kb/278835</a>`
      ], [
        `5.3.3`,
        `Microsoft Edge: <a href="//support.microsoft.com/en-gb/products/microsoft-edge">https://support.microsoft.com/en-gb/products/microsoft-edge</a> (Please note that there are no specific instructions at this time, but Microsoft support will be able to assist)`
      ], [
        `5.3.4`,
        `Safari (macOS): <a href="//support.apple.com/kb/PH21411?viewlocale=en_GB&locale=en_GB">https://support.apple.com/kb/PH21411?viewlocale=en_GB&locale=en_GB</a>`
      ], [
        `5.3.5`,
        `Safari (iOS): <a href="//support.apple.com/en-gb/HT201265">https://support.apple.com/en-gb/HT201265</a>`
      ], [
        `5.3.6`,
        `Mozilla Firefox: <a href="//support.mozilla.org/en-US/kb/enable-and-disable-Cookies-website-preferences">https://support.mozilla.org/en-US/kb/enable-and-disable-Cookies-website-preferences</a>`
      ], [
        `5.3.7`,
        `Android: <a href="//support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en">https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid&hl=en</a> (Please refer to your device’s documentation for manufacturers’ own browsers)`
      ]
    ];
    this.changeCookieData = [
      [
        `6.1`,
        `We may alter this Cookie Policy at any time.  If We do so, details of the changes will be highlighted at the bottom of the  homepage.  Any such changes will become binding on you on your first use of Our Site after the changes have been made.  You are therefore advised to check this page from time to time.`
      ], [
        `6.2`,
        `In the event of any conflict between the current version of this Cookie Policy and any previous version(s), the provisions current and in effect shall prevail unless it is expressly stated otherwise.`
      ], [
        ``
      ]
    ];

    this.furtherInfoData = [
      [
        `7.1`,
        `If you would like to know more about how We use Cookies, please contact Us at info@maidsafe.net, by telephone on 01292 317311, or by post at MaidSafe, 6 Forbes Drive, Ayr, KA8 9FG.`
      ]
    ];
  }

  render() {
    return (
      <div className="terms">

        <div className="content-1">
          <h3 className="title">Terms and Conditions</h3>
        </div>

        <div className="content-3">
          <h3 className="title">BACKGROUND</h3>
          <p className="p">
            This website <a href="//maidsafe.net/">https://maidsafe.net/</a> does not use Cookies and/or similar technologies. MaidSafe.net Limited understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website so with that in mind, we don’t use cookies on maidsafe.net.
          </p>
          <p className="p">
            However, our sub domain, <a href="//blogs.maidsafe.net">https://blogs.maidsafe.net</a> (“Our Site”) uses Cookies and similar technologies in order to distinguish you from other users. Please read this Cookie Policy carefully and ensure that you understand it. Your acceptance of Our Cookie Policy is deemed to occur when you press the accept button on Our Cookie banner pop up. If you do not agree to Our Cookie Policy, please stop using Our Site immediately.
          </p>
        </div>

        <div className="content-3">
          <h3 className="title">1. Definitions and Interpretation</h3>
          <p className="p">In this Cookie Policy, unless the context otherwise requires, the following expressions have the following meanings:</p>
          <TermsTable data={this.definitionData} />
        </div>

        <div className="content-3">
          <h3 className="title">2. Information About Us</h3>
          <TermsTable data={this.aboutUsData} />
        </div>

        <div className="content-3">
          <h3 className="title">3. How Does Our Site Use Cookies?</h3>
          <TermsTable data={this.siteCookiesData} />
        </div>

        <div className="content-3">
          <h3 className="title">4. What Cookies Does Our Site Use?</h3>
          <TermsTable data={this.cookiesWeUse} />
        </div>

        <div className="content-3">
          <h3 className="title">5. Consent and Control</h3>
          <TermsTable data={this.consertData} />
        </div>

        <div className="content-3">
          <h3 className="title">6. Changes to this Cookie Policy</h3>
          <TermsTable data={this.changeCookieData} />
        </div>

        <div className="content-3">
          <h3 className="title">7. Further Information</h3>
          <TermsTable data={this.furtherInfoData} />
        </div>
      </div>
    )
  }
}
export default withSiteData(() => (
  Base(Terms)
));
