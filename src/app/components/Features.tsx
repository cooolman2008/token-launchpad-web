"use client";

import { useState, useEffect } from "react";
import Cards from "./Elements/Cards";
import { animate, inView, spring } from "motion";

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
					{ y: [15, 0], opacity: [0, 1] },
					{
						easing: spring({ stiffness: 300, damping: 16, mass: 1 }),
						delay: 0.5,
					}
					// { y: [15, 0], opacity: [0, 1], scale: [0.95, 1], skewX: [2, 0], skewY: [1, 0] },
					// {
					// 	easing: spring({ stiffness: 300, damping: 16, mass: 1 }),
					// 	delay: stagger(0.2, { start: 0.1 }),
					// }
				);
			});
		}
	}, [show]);

	return (
		<>
			{show && (
				<section id="features" className="z-10">
					<div className="container mx-auto px-10 pt-28 pb-14 flex flex-col justify-center">
						<h2 className="text-3xl/tight lg:text-5xl/tight font-normal text-center safu-grad-text-white pop underline px-4 py-4">
							Why Choose SAFU Launcher?
						</h2>
						<p className="text-sm lg:text-2xl lg:leading-9 text-zinc-400 font-light ups mb-8 text-center pop">
							Stay ahead with our unmatched features and returns
						</p>
						<h3 className="text-2xl/tight lg:text-3xl/tight font-medium text-left safu-grad-text-white pop">
							<b className="font-medium lg:text-5xl/tight">Investors</b> - Safest Gateway to Investments
						</h3>
						<div className="flex flex-wrap pt-12 lg:pt-20 mb-8">
							<Cards
								name="Safe Investments"
								desc="Inbuilt security features to prevent rug pulls and keep your assets secure"
								type={0}
							/>
							<Cards
								name="Regain Control"
								desc="Fully decentralised platform with no interactions with external servers"
								type={1}
							/>
							<Cards
								name="Early Access"
								desc="Decentralised access to risk free presales without centralised features such as tier-based allocations"
								type={2}
							/>
							<Cards
								name="Premium Rewards"
								desc="Stake your tokens to earn rewards in ETH and boost your holdings"
								type={3}
							/>
							<Cards
								name="High Returns"
								desc="With SAFU’s advanced tech, you get to invest in the most promising IDOs and make more with less"
								type={4}
							/>
							<Cards
								name="Diversify Your Portfolio"
								desc="Participate in the best DeFi, GameFi, Memes and other IDOs for cashing in diverse opportunities"
								type={5}
							/>
						</div>
						<h3 className="text-2xl/tight lg:text-3xl/tight font-semibold text-left safu-grad-text-white pop">
							<b className="font-medium lg:text-5xl/tight">Creators</b> - Effortless, fair and free crypto launches
						</h3>
						<div className="flex flex-wrap pt-12 lg:pt-20">
							<Cards
								name="Choose Your Protocols"
								desc="Compatibility across blockchains and decentralised exchanges"
								type={6}
							/>
							<Cards
								name="Sustained Success"
								desc="Unique inbuilt mechanism to launch staking pools for your tokens to reward your stakers in ETH"
								type={7}
							/>
							<Cards
								name="Fund Your Dreams"
								desc="Strong, customisable tokenomics with basic and advanced settings to turn your idea into a thriving crypto project"
								type={8}
							/>
							<Cards
								name="Start With Zero"
								desc="Transparent token presales for increasing visibility and raising early funds"
								type={9}
							/>
							<Cards
								name="Prevent Destabilisation"
								desc="Inbuilt security feature to protect your tokens from sniper attacks"
								type={10}
							/>
							<Cards
								name="Intuitive UX at low cost"
								desc="Designed for easy and seamless launches with free access to all core features"
								type={11}
							/>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
