"use client";

import { useState, useEffect } from "react";
import { animate, inView, spring } from "motion";

export default function Positioning() {
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
				);
			});
		}
	}, [show]);

	return (
		<>
			{show && (
				<section id="position" className="z-10">
					<div className="container mx-auto px-10 pt-28 pb-14 flex justify-center flex-wrap">
						<div className="dash-double-horizontal text-center">
							<h2 className="px-4 py-4 xl:py-8 text-3xl sm:text-4xl lg:text-5xl font-black safu-grad-text ups">
								Freedom with Security
							</h2>
							<p className="text-sm lg:text-2xl lg:leading-9 text-zinc-400 font-light ups mb-8">
								We are the premier blockchain platform empowering decentralised investments with high returns and
								reliable protection.
								<br />
								<br />
								Where current platforms fail to retain user trust, we rise to the challenge with our exceptional
								technology and commitment to decentralisation. We are on a mission to build a safer DeFi future,
								protecting investors from rug pulls and creators from sniping attacks with state-of-the-art features and
								tokenomics.
							</p>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
