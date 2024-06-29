"use client";

import { useState, useEffect } from "react";
import Cards from "./Elements/Cards";
import { animate, inView, spring, stagger } from "motion";

export default function Features() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	useEffect(() => {
		if (show) {
			inView(".pop", (event) => {
				animate(
					event.target,
					{ y: [15, 0], opacity: [0, 1], scale: [0.95, 1], skewX: [2, 0], skewY: [1, 0] },
					{
						easing: spring({ stiffness: 300, damping: 16, mass: 1 }),
						delay: stagger(0.2, { start: 0.5 }),
					}
				);
			});
		}
	}, [show]);

	return (
		<>
			{show && (
				<section id="features" className="bg-gradient-to-r from-blue-950/30">
					<div className="container mx-auto px-10 pt-28 pb-14 flex justify-center flex-wrap">
						<h1 className="text-4xl/tight lg:text-6xl/tight font-black text-center pop bg-gradient-to-t from-slate-200/80 to-slate-200 safu-grad-text-white pop">
							Building a SAFU DeFi Ecosystem
						</h1>
						<div className="flex flex-wrap pt-12 lg:pt-20">
							<Cards
								name="Fully on-chain"
								desc="$SAFU ERC20 token is an immutable EIP2535 smart contract for on-chain launch of ERC20-SAFU tokens"
								type={1}
							/>
							<Cards
								name="Staking Pools & Presale"
								desc="ERC20-SAFU tokens can launch staking pools by channelling a share of its taxes to the pool, ensuring $ETH rewards to investors"
								type={2}
							/>
							<Cards
								name="Liquidity Lock & Token Vesting"
								desc="Free in-built liquidity lock and native token vesting to eliminate rug pulls and dependency on external services"
								type={3}
							/>
							<Cards
								name="Custom Tokenomics"
								desc="Tokenomics configuration to suit the project’s needs and secure the launch from snipers with high initial taxes"
								type={4}
							/>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
