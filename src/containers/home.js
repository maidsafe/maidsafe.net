import React from 'react'
import { withSiteData } from 'react-static'
//
import SafeNetworkLogo from '../assets/imgs/safenetwork_logo.svg';
import CONST from '../constants';
import Base from './partials/base_wrapper';

class Banner extends React.Component {
  render() {
    return (
      <section className="hm-bnr">
        <div className="hm-bnr-b base">
          <p className="hm-bnr-para typo-bold-para-1">
            Started in 2006 by Scottish engineer David Irvine, MaidSafe is a small team, comprised of: thinkers, inventors, tinkerers, engineers and designers. Although based in Ayr, Scotland, we have drawn talents from many different cultures and countries, reflecting the users that we serve. Despite this variety, we all share a mission: a desire to provide security and privacy for everyone.
          </p>
        </div>
      </section>
    )
  }
}

class Intro extends React.Component {
  render() {
    return (
      <section className="hm-intro">
        <div className="hm-intro-b base">
          <h3 className="hm-intro-h typo-head-1">Intro to MaidSafe</h3>
          <p className="hm-intro-p typo-para-1">
            MaidSafe's aim is to provide privacy, security and freedom to everyone on the planet. This has been our unwavering ambition since we started on this journey in 2006, and it remains our driving force today.
          </p>
        </div>
      </section>
    )
  }
}

class SafeNet extends React.Component {
  render() {
    return (
      <section className="hm-safenet">
        <div className="hm-safenet-b base">
          <div className="hm-safenet-med"><img src={SafeNetworkLogo} alt="SafeNetwork logo" /></div>
          <p className="hm-safenet-p typo-bold-para-2">
            We will do so by building the SAFE Network, the world’s first autonomous and decentralised data network. Be part of creating this new Internet, for the people by the people; visit <a href="https://safenetwork.tech">safenetwork.tech</a> to join us today.<span className="arrow-red sm"></span>
          </p>
        </div>
      </section>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="hm">
        <div className="hm-b">
          <Banner />
          <Intro />
          <SafeNet />
        </div>
      </div>
    );
  }
}

export default withSiteData(() => (
  Base(Home, CONST.meta.home)
));
