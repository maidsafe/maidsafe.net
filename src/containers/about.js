import React from 'react';
import { withSiteData } from 'react-static'
import { Link } from 'react-router-dom';

import CONST from '../constants';
import Base from './partials/base_wrapper';

class About extends React.Component {
	constructor() {
		super();
		this.teams = {
			'Adam': '/_temp/img/team/adam.JPG',
			'David': '/_temp/img/team/david.jpg',
			'Edward': '/_temp/img/team/Edward.jpg',
			'Francis': '/_temp/img/team/francis-brunelle.jpg',
			'Gabriel': '/_temp/img/team/gabriel.jpg',
			'Jean-Philippe': '/_temp/img/team/jean_philippe_dufraigne.jpg',
			'Jim': '/_temp/img/team/jim_collinson.JPG',
			'Jon': '/_temp/img/team/jon.jpg',
			'Josh': '/_temp/img/team/Josh.jpeg',
			'Lionel': '/_temp/img/team/lionel.jpeg',
			'Marcin': '/_temp/img/team/Marcin.jpg',
			'Nikita': '/_temp/img/team/Nikita.jpg',
			'Qi': '/_temp/img/team/qi.jpg',
			'Ravi': '/_temp/img/team/ravi.jpg',
			'Sharon': '/_temp/img/team/Sharon.jpg',
			'Stephen': '/_temp/img/team/stephen.jpg',
			'Victoria': '/_temp/img/team/Victoria.jpg',
			'Yogesh': '/_temp/img/team/yogesh.jpg'
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
							<h3>Who we are</h3>
							<p>
								Started in 2006 by Scottish engineer David Irvine, MaidSafe is a small team,
  comprised of: thinkers, inventors, tinkerers, PhDs, engineers and designers.
  Although based in Ayr, Scotland, we have drawn talents from many different
  cultures and countries, reflecting the users that we serve. Despite this
  variety, we all share a mission: a desire to provide security and privacy for
  everyone.
  </p>
							<div className="ques">
								<span>Interested in joining our diverse and growing team, either in Ayr or remotely?</span>
								<Link to="/careers" className="al-btn invert">VIEW OPEN POSITIONS</Link>
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
							MaidSafe's aim is to provide privacy, security and freedom to everyone on the planet. This has been our unwavering ambition since we started on this journey in 2006, and it remains our driving force today.
							</p>
							<p>
							Online data has become so insecure and data thefts so commonplace that our trust in companies securing our data is almost entirely eroded. More than 2.5 billion personal data records were stolen in 2017.  A new way of managing data is required, and MaidSafe combines several features that provide a level of security not possible using existing methods.</p>
							<p>Data security not only allows us to keep our credit card details safe, or our medical records secure, but also brings us  privacy. Privacy is misunderstood by many.</p>
							<p>It’s not simply about protecting secrets or even hiding the things that we shouldn’t be doing. Privacy is simply protecting your ability to choose which personal thoughts, communications and actions you want to share with others. Without privacy, one's ability to communicate, explore, act or even think freely is restrained. We need privacy to enable creativity, and to allow new ideas and forms of expression to flourish.</p>
							<p>In our quest to provide privacy, security and freedom to everyone, we are creating an Open Source decentralised data network called the SAFE Network - and everyone’s welcome. Join us at <a href="https://safenetwork.tech">safenetwork.tech</a> </p>
						</div>
					</div>
					<div className="post-3-cont">
						<div className="post-3-cont-i">
							<h3>Executive Directors</h3>
							<h4>David Irvine</h4>
							<p>Founder David has over 23 years’ experience in IT and 15 years running companies. He designed one of the World’s largest private networks (Saudi Aramco, over $300M).</p>
							<p>Involved in start up businesses since 1995, he has presented technology lectures at Google (Seattle) and British Computer Society (Christmas Lecture) amongst others.</p>
							<p>A published author on papers in the fields of complex networking, distributed computing and cryptography related technologies, he is also the author of 30 patent applications in the field of computer networking.</p>
						</div>
					</div>
					<div className="post-3-cont">
						<div className="post-3-cont-i">
							<h3>Non-Executive Directors</h3>
							<h4>David Allan</h4>
							<p>David is a qualified corporate lawyer with 35 years of experience in mergers & acquisitions and equity funding. Over and above this he has also been a director in several tech start-ups.</p>
							<h4>Andy Laverty</h4>
							<p>Andy is a Qualified Chartered Accountant who has held positions such as Interim former Chief Financial Officer with Sun Microsystems and Group Chief Financial Officer of FNZ, a wealth management Software as a Service.</p>
							<h4>David Cosh</h4>
							<p>David has 40 years experience of working at Director Level, having grown a drinks business to £40m and employing 350 people.</p>
							<h4>Fraser Hutchison</h4>
							<p>Fraser has 26 years service as an Operational Pilot in the Royal Navy. He was also a Senior Manager with the AA and was the owner and operator of a family business.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withSiteData(() => (Base(About, CONST.meta.about, CONST.nav.ABOUT)));
