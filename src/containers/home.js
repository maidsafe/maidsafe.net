import React from 'react'
import { withSiteData } from 'react-static'
//
import SafeNetworkLogo from '../assets/imgs/safenetwork_logo.svg';
import CONST from '../constants';
import Base from './partials/base_wrapper';

class Banner extends React.Component {
  render() {
    return (
      <div className="hm-bnr">
        <div className="hm-bnr-b base">
          <p className="hm-bnr-para typo-bold-para-1">
            MaidSafe, builders of <a href="https://safenetwork.tech">the SAFE Network</a>, are a small team of: thinkers, inventors, tinkerers, engineers and designers started by Scottish engineer David Irvine in 2006.
          </p>
        </div>
      </div>
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
            Based in Ayr, Scotland, MaidSafe have drawn talents from many cultures and countries, reflecting the users that we serve. Despite this variety, we all share a mission: a desire to provide security and privacy for everyone on the planet. This has been our unwavering ambition since we started on this journey in 2006, and it remains our driving force today.
          </p>
        </div>
      </section>
    )
  }
}

class SafeNet extends React.Component {
  render() {
    return (
      <div className="hm-safenet">
        <div className="hm-safenet-b base">
          <div className="hm-safenet-med"><img src={SafeNetworkLogo} alt="SafeNetwork logo" /></div>
          <p className="hm-safenet-p typo-bold-para-2">
            We will do so by building the SAFE Network, the world’s first autonomous and decentralised data network. Be part of creating this new Internet, for the people by the people; visit <a href="https://safenetwork.tech">safenetwork.tech</a> to join us today.<a href="//safenetwork.tech"><span className="arrow-red sm"></span></a>
          </p>
        </div>
      </div>
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
  componentDidMount() {
    var hash = window.location.hash.substr(1);
    if (hash.toLowerCase() === "safeprimer") {
      window.location = "https://safenetworkprimer.com";
    }
  }
}

export default withSiteData(() => (
  Base(Home, CONST.meta.home)
));
