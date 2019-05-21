import React from 'react';
import { withSiteData } from 'react-static'

import CONST from '../constants';
import Base from './partials/base_wrapper';
import TXT from "./contents/about"

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
							<h3>{TXT.what.title}</h3>
							<p>{TXT.what.para1}</p>
							<p>{TXT.what.para2}</p>
							<p>{TXT.what.para3}</p>
							<p>{TXT.what.para4}</p>
							<p>{TXT.what.para5.chunk1} <a href={TXT.what.para5.link.href}>{TXT.what.para5.link.name}</a>{TXT.what.para5.chunk2}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withSiteData(() => (Base(About, CONST.meta.about, CONST.nav.ABOUT)));
