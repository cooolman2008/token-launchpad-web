"use client";

import { useState, useEffect, useRef } from "react";
import Block from "./Elements/Block";

export default function Staking() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<>
			{show && (
				<section id="staking" className=" bg-gradient-to-r from-blue-950/30">
					<div className="container mx-auto px-10 pt-28 lg:pt-32 flex justify-center flex-wrap">
						<Block
							name="SAFU AI"
							desc="A comprehensive, responsible AI module to aid strategic decision-making for token creation, launch, trading and investing. SAFUscore, which the DAO references to allocate voting power and distribute rewards, serves as a key data point for SAFU AI."
							type={1}
						/>
						<Block
							name="SAFU GameFi"
							desc="Enable DeFi for gaming dApps by creating in-game tokens using SAFU Launcher’s smart contracts. This ensures real world value proposition for gamers and encourages active participation in immersive gameplay."
							type={2}
						/>
						<Block
							name="SAFU Verse"
							desc="SAFU DAO maintains a collection of NFTs of images, animations and music, available on OpenSea. The NFTs possess unique traits that enhance the holder’s voting rights, grant specific powers and offer discounts."
							type={3}
						/>
					</div>
				</section>
			)}
		</>
	);
}
