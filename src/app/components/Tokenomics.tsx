"use client";

import { useState, useEffect } from "react";
import Numbers from "./Elements/Numbers";

export default function Tokenomics() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<>
			{show && (
				<section id="tokenomics" className="bg-gradient-to-r from-blue-950/30">
					<div className="container mx-auto px-10 py-14 flex justify-center flex-wrap">
						<h2 className="uppercase mb-2 text-4xl lg:text-6xl/tight font-black text-center pop bg-gradient-to-t from-slate-200/80 to-slate-200 safu-grad-text-white">
							Tokenomics
						</h2>
						<div className="w-full"></div>
						<p className="md:w-96 lg:w-3/4 text-sm lg:text-2xl lg:leading-9 text-gray-400 font-light text-center pop">
							$SAFU, the native token of the SAFU ecosystem, is key to all practical and governance functions
						</p>
						<div className="w-full flex flex-wrap mt-12">
							<Numbers name="Total Supply" desc="1 B" />
							<Numbers name="Initial Liquidity" desc="600 M" />
							<Numbers name="Presale" desc="200 M" />
							<Numbers name="Team Allocation" desc="150 M" />
							<Numbers name="Treasury Allocation" desc="50 M" />
							<Numbers name="Staking Pool" desc="10%" more="of swap tax and fees" />
							<Numbers name="Swap Taxation" desc="5%" more="on each swap" />
						</div>
					</div>
				</section>
			)}
		</>
	);
}
