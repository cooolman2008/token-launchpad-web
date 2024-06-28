"use client";

import { useState, useEffect } from "react";
import Numbers from "./Elements/Numbers";

export default function Tokenomics() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	useEffect(() => {
		if (show) {
			const delay = window.innerWidth > 1024 ? 3 : 3;
			// animate(
			// 	".pop",
			// 	{ opacity: [0, 1] },
			// 	{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: delay }) }
			// );
		}
	}, [show]);

	return (
		<>
			{show && (
				<section id="tokenomics" className="bg-gradient-to-r from-blue-950/30">
					<div className="container mx-auto px-10 py-14 flex justify-center flex-wrap">
						<h2 className="uppercase mb-2 text-4xl lg:text-6xl/tight font-black text-center pop bg-gradient-to-t from-slate-200/80 to-slate-200 safu-grad-text-white">
							Tokenomics
						</h2>
						<div className="w-full"></div>
						<p className="md:w-96 lg:w-3/4 text-md lg:text-lg font-light text-center text-gray-400">
							$SAFU, the native token of the SAFU ecosystem, is key to all utilitarian and governance functions
						</p>
						<div className="w-full flex flex-wrap mt-12">
							<Numbers name="Total Supply" desc="1 B" />
							<Numbers name="Initial Liquidity" desc="810 M" />
							<Numbers name="Presale" desc="100 M" />
							<Numbers name="Team Allocation" desc="40 M" />
							<Numbers name="Treasury Allocation" desc="50 M" />
							<Numbers name="Staking Pool" desc="10%" more=" of swap tax and fees" />
							<Numbers name="Swap Taxation" desc="5%" more="per swap" />
						</div>
					</div>
				</section>
			)}
		</>
	);
}