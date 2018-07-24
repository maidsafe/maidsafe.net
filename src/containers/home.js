import React from 'react'
import { withSiteData } from 'react-static'
//
import SafeNetworkLogo from '../assets/imgs/safenetwork_logo.svg';
import Header from './partials/header';
import '../sass/main.sass';

class Banner extends React.Component {
  render() {
    return (
      <section className="home-bnr">
        <div className="home-bnr-b base">
          <p className="home-bnr-para typo-bold-para-1">
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
      <section className="home-intro">
        <div className="home-intro-b base">
          <h3 className="home-intro-h typo-head-1">Intro to MaidSafe</h3>
          <p className="home-intro-p typo-para-1">
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
      <section className="home-safenet">
        <div className="home-safenet-b base">
          <div className="home-safenet-med"><img src={SafeNetworkLogo} alt="SafeNetwork logo" /></div>
          <p className="home-safenet-p typo-bold-para-2">
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
      <main>
        <Header />
        <div className="home">
          <div className="home-b">
            <Banner />
            <Intro />
            <SafeNet />
          </div>
        </div>
      </main>
    );
  }
}

export default withSiteData(() => (
  <Home />
));
