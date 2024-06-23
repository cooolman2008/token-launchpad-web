"use client";

import Image from "next/image";
import tokenomics from "../../../public/tokenomics.png";
import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";

export default function Tokenomics() {
	useEffect(() => {
		inView(".ups", (event) => {
			animate(
				event.target,
				{ y: [0, -15], opacity: [0, 1] },
				{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: 0.2 }) }
			);
		});
	}, []);

	return (
		<>
			<section className="w-full flex justify-center bg-gradient-to-l from-[#FD973433] from-30% to-[180%] to-[#000000]">
				<div className="container p-10 flex justify-center flex-wrap">
					<h2 className="mb-10 text-4xl font-semibold text-white text-center ups">Tokenomics</h2>
					<p className="mb-8 text-sm font-normal text-center text-[#B9B9B9] ups">
						Breakdown of $SAFU token supply, initial liquidity provision, presale allocation, team allocation, treasury
						allocation, and staking pool rewards. Explanation of launch fees and taxation.
					</p>
					<div className="w-full flex justify-center mb-12">
						<Image id="box" src={tokenomics} className="w-full h-auto ups" alt="SAFU Launcher Logo" />
					</div>
				</div>
			</section>
		</>
	);
}
