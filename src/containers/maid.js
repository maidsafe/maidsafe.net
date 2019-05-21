import React from 'react';
import { withSiteData } from 'react-static'

import CONST from '../constants';
import Base from './partials/base_wrapper';
import TXT from "./contents/maid"

class MaidSafeCoin extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const self = this;
		window.addEventListener('resize', () => {});

		const script = document.createElement("script");

    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.async = true;

    document.body.appendChild(script);
	}

	render() {
		return (
			<div className="maid">
				<div className="intro">
					<div className="content-1">

						<h3>{TXT.intro.title}</h3>
						<div className="layout4060">
							<div className="lay-60">
								<p>{TXT.intro.para1} <br/>
								{TXT.intro.para2}</p>
							</div>
							<div className="lay-40">
								<div className="ticker">
									<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
									<div className="coinmarketcap-currency-widget" data-currencyid="291" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div>
								</div>
							</div>
						</div>

					</div>
				</div>


				<div className="xchg content-1">
					<h3>{TXT.xchg.title}</h3>
					<div className="content-1">
						<p>{TXT.xchg.para}</p>
					</div>
					<div className="xchg-b">
						<a href="https://poloniex.com/exchange#btc_maid">
							<div className="xchg-i poloniex">Poloniex</div>
						</a>
						<a href="https://hitbtc.com/MAID-to-BTC">
							<div className="xchg-i hitbtc">HitBTC</div>
						</a>
						<a href="https://www.bitker01.com/#/bbTrades/maid_btc">
							<div className="xchg-i bitker">Bitker</div>
						</a>
					</div>

					<div className="steps">
						<div className="content-1">
							<p>
								{TXT.xchg.steps.intro}
								<ul>
									<div className="steplist">
										<li>{TXT.xchg.steps.s1}</li>
										<li>{TXT.xchg.steps.s2}</li>
										<li>{TXT.xchg.steps.s3}</li>
										<li>{TXT.xchg.steps.s4}</li>
										<li>{TXT.xchg.steps.s5}</li>
										<li>{TXT.xchg.steps.s6}</li>
									</div>
								</ul>
							</p>
						</div>
					</div>
				</div>

				<div className="wallet">
					<div className="content-1">
						<h3>{TXT.wallet.title}</h3>
						<p>
							{TXT.wallet.para1.block1}
							<a href={TXT.wallet.para1.link.href}>{TXT.wallet.para1.link.name}</a>
							{TXT.wallet.para1.block2}
						</p>
						<p>
							<a href={TXT.wallet.para2.link.href}><b>{TXT.wallet.para2.link.name}</b></a>{TXT.wallet.para2.block1}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default withSiteData(() => (Base(MaidSafeCoin, CONST.meta.maid, CONST.nav.MAID)));
