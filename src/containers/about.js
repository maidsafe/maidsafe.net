import React from 'react';
import { withSiteData } from 'react-static'

import CONST from '../constants';
import Base from './partials/base_wrapper';
import TXT from "./contents/about_text"

class About extends React.Component {
	constructor() {
		super();
		this.teams = {
			'Adam': '/_temp/img/team/adam.jpg',
			'Ashwin': '/_temp/img/team/ashwin.jpg',
			'Bart': '/_temp/img/team/bartlomiej.jpg',
			'Calum': '/_temp/img/team/calum.jpg',
			'Ceilidh': '/_temp/img/team/ceilidh.jpg',
			'Chris': '/_temp/img/team/chris.jpg',
			'David': '/_temp/img/team/david.jpg',
			'David_G': '/_temp/img/team/dgeddes.jpg',
			'Dug': '/_temp/img/team/dug.jpg',
			'Francis': '/_temp/img/team/francis.jpg',
			'Fraser': '/_temp/img/team/fraser.jpg',
			'Gabriel': '/_temp/img/team/gabriel.jpg',
			'Hunter': '/_temp/img/team/hunter.jpg',
			'Jean-Philippe': '/_temp/img/team/jean.jpg',
			'Jim': '/_temp/img/team/jim.jpg',
			'Jon': '/_temp/img/team/jon.jpg',
			'Josh': '/_temp/img/team/josh.jpg',
			'Kayley': '/_temp/img/team/kayley.jpg',
			'Krishna': '/_temp/img/team/krishna.jpg',
			'Lindsey': '/_temp/img/team/lindsey.jpg',
			'Lionel': '/_temp/img/team/lionel.jpg',
			'Marcin': '/_temp/img/team/marcin.jpg',
			'Nadia': '/_temp/img/team/nadia.jpg',
			'Nick': '/_temp/img/team/nick.jpg',
			'Nikita': '/_temp/img/team/nikita.jpg',
			'Pierre': '/_temp/img/team/pierre.jpg',
			'Qi': '/_temp/img/team/qi.jpg',
			'Ravinder': '/_temp/img/team/ravi.jpg',
			'Sarah': '/_temp/img/team/sarah.jpg',
			'Sharon': '/_temp/img/team/sharon.jpg',
			'Siddique': '/_temp/img/team/siddique.jpg',
			'Spandan': '/_temp/img/team/spandan.jpg',
			'Srini': '/_temp/img/team/srini.jpg',
			'Stephen': '/_temp/img/team/stephen.jpg',
			'Shankar': '/_temp/img/team/shankar.jpg',
			'Vinitha': '/_temp/img/team/vinitha.jpg',
			'Victoria': '/_temp/img/team/victoria.jpg',
			'Vignesh': '/_temp/img/team/vignesh.jpg',
			'Viv': '/_temp/img/team/viv.jpg',
			'Yogesh': '/_temp/img/team/yogesh.jpg',
		};
		this.state = {
			teamItems: []
		};
	}

	componentDidMount() {
		this.setTeamImages();
		const self = this;
		window.addEventListener('resize', () => {
			self.setTeamImages();
		});
	}

	setTeamImages() {
		const totalWidth = window.innerWidth;
		let imgItemCount = 8;
		if (totalWidth <= 1134 && totalWidth >= 830) {
			imgItemCount = 6;
		}

		if (totalWidth <= 829) {
			imgItemCount = 5;
		}
		const teamImgItemHg = parseFloat(totalWidth / imgItemCount)

		const prepareImgItem = (name, link) => {
			return (
				<div key={`team-image-${name}`} style={{height: `${teamImgItemHg}px`}} className="team-img-i">
					<img height={teamImgItemHg} src={link} alt={name} title={name} />
				</div>
			)
		}
		const teamItems = [];
		teamItems.push(Object.keys(this.teams).sort().map((key, i) => prepareImgItem(key, this.teams[key])));
		this.setState({
			teamItems: teamItems
		});
	}

	render() {
		return (
			<div className="about">
				<div className="team-img-b clearfix">
					<div className="team-img clearfix">
						{this.state.teamItems}
					</div>
				</div>
				<div id="who-we-are" className="post-3">
					<div className="post-3-cont">
						<div className="post-3-cont-i">
							<h3>{TXT.who.title}</h3>
							<p>{TXT.who.para}</p>
							{/*
							<div className="ques">
								<span>Interested in joining our diverse and growing team, either in Ayr or remotely?</span>
								<a href="/careers" className="al-btn invert">VIEW OPEN POSITIONS</a>
							</div>
							*/}
						</div>
					</div>
				</div>
				<div className="page-banner safe-pod home-like company-page"></div>
				<div id="what-drives-us" className="post-3">
					<div className="post-3-cont">
						<div className="post-3-cont-i">
							<h3>What drives us</h3>
							<p>
							MaidSafe's aim is to provide privacy, security and freedom to everyone on the planet. This has been our unwavering ambition since we started on this journey in 2006, and it remains our driving force today.
							</p>
							<p>
							Online data has become so insecure and data thefts so commonplace that our trust in companies securing our data is almost entirely eroded. More than 2.5 billion personal data records were stolen in 2017.  A new way of managing data is required, and MaidSafe combines several features that provide a level of security not possible using existing methods.</p>
							<p>Data security not only allows us to keep our credit card details safe, or our medical records secure, but also brings us  privacy. Privacy is misunderstood by many.</p>
							<p>It’s not simply about protecting secrets or even hiding the things that we shouldn’t be doing. Privacy is simply protecting your ability to choose which personal thoughts, communications and actions you want to share with others. Without privacy, one's ability to communicate, explore, act or even think freely is restrained. We need privacy to enable creativity, and to allow new ideas and forms of expression to flourish.</p>
							<p>In our quest to provide privacy, security and freedom to everyone, we are creating an Open Source decentralised data network called the SAFE Network - and everyone’s welcome. Join us at <a href="https://safenetwork.tech">safenetwork.tech</a> </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withSiteData(() => (Base(About, CONST.meta.about, CONST.nav.ABOUT)));
