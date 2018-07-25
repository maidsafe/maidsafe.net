import React from 'react';
import { withSiteData } from 'react-static'

import Base from './partials/base_wrapper';

class About extends React.Component {
	constructor() {
		super();
		this.teams = {
			'Adam': '/_temp/img/team/adam.JPG',
			'Andrew': '/_temp/img/team/Andrew.jpg',
			'Bartlomiej': '/_temp/img/team/Bartlomiej.JPG',
			'Benjamin': '/_temp/img/team/Benjamin.jpg',
			'David': '/_temp/img/team/david.jpg',
			'Francis': '/_temp/img/team/francis-brunelle.jpg',
			'Fraser': '/_temp/img/team/fraser.jpg',
			'Gabriel': '/_temp/img/team/gabriel.jpg',
			'Hunter': '/_temp/img/team/Hunter.jpg',
			'Josh': '/_temp/img/team/Josh.jpeg',
			'Krishna': '/_temp/img/team/krishna.jpg',
			'Marcin': '/_temp/img/team/Marcin.jpg',
			'Michael': '/_temp/img/team/michael.jpg',
			'Nick': '/_temp/img/team/nick.jpg',
			'Nikita': '/_temp/img/team/Nikita.jpg',
			'Qi': '/_temp/img/team/qi.jpg',
			'Shankar': '/_temp/img/team/Shankar.jpg',
			'Sharon': '/_temp/img/team/Sharon.jpg',
			'Shona': '/_temp/img/team/shona.JPG',
			'Spandan': '/_temp/img/team/spandan.jpg',
			'Srini': '/_temp/img/team/Srini.jpg',
			'Victoria': '/_temp/img/team/Victoria.jpg',
			'Viv': '/_temp/img/team/viv.jpg'
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
		teamItems.push(Object.keys(this.teams).map((key, i) => prepareImgItem(key, this.teams[key])));
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
							<h3>Who we are</h3>
							<p>
								Started in 2006 by Scottish engineer David Irvine, MaidSafe is a small team,
  comprised of: thinkers, inventors, tinkerers, PHDs, engineers and designers.
  Although based in Ayr, Scotland, we have drawn talents from many different
  cultures and countries, reflecting the users that we serve. Despite this
  variety, we all share a mission: a desire to provide security and privacy for
  everyone.
  </p>
							<div className="ques">
								<span>Interested in joining our diverse and growing team, either in Ayr or remotely?</span>
								<a href="./careers.html" className="al-btn invert">VIEW OPEN POSITIONS</a>
							</div>
						</div>
					</div>
				</div>
				<div className="page-banner safe-pod home-like company-page"></div>
				<div id="what-drives-us" className="post-3">
					<div className="post-3-cont">
						<div className="post-3-cont-i">
							<h3>What drives us</h3>
							<p>
								MaidSafe's aim is to provide privacy, security and freedom to everyone on the
  planet. This has been our unwavering ambition since we started on this journey
  in 2006, and it remains our driving force today.
  </p>
							<p>
								Online data has become so insecure and data thefts so commonplace that our trust
  in companies securing our data is almost entirely eroded. An estimated 1.1
  billion personal and sensitive records were stolen during 2014 with 8 incidents
  reported every single day. A new way of managing data is required, and MaidSafe
  combines several features that we believe provide a level of security not
  possible using existing methods.
  </p>
							<p>
								Data security not only allows us to keep our credit card details safe, or our
  medical records secure, but only with security do we achieve privacy. Privacy is
  misunderstood by many. Too often people believe that demanding privacy is
  identical to protecting secrets, or hiding something that we shouldn’t be doing.
  Some would have us believe that, in some way, by not wanting to share everything
  with the world, we are involved in an unlawful act.
  </p>
							<p>
								But in truth, this is not what privacy is about. Privacy is simply the ability
  to choose which personal thoughts, communications and actions you wish to share
  with others. Without privacy one's ability to communicate, explore, act or even
  think freely is restrained. Only in an environment of adequate privacy can
  creativity, new ideas and forms of expression flourish.
  </p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withSiteData(() => (Base(About)));
