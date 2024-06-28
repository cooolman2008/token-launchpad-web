"use client";

import { useState, useEffect } from "react";
import { animate, spring, inView, stagger } from "motion";
import Telegram from "./Elements/Telegram";
import Twitter from "./Elements/Twitter";
import Etherscan from "./Elements/Etherscan";
import Youtube from "./Elements/Youtube";
import Discord from "./Elements/Discord";
import Medium from "./Elements/Medium";

export default function Socials() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	useEffect(() => {
		if (show) {
			const delay = window.innerWidth > 1024 ? 3 : 3;
			animate(
				".ups",
				{ y: [0, -15], opacity: [0, 1] },
				{ easing: spring({ stiffness: 300, damping: 16, mass: 1 }), delay: stagger(0.3, { start: delay }) }
			);
		}
	}, [show]);

	return (
		<>
			{show && (
				<section className="w-full py-12 px-4 flex flex-wrap justify-center bg-gradient-to-r from-blue-950/30">
					<Telegram url="something" />
					<Twitter url="something" />
					<Etherscan url="something" />
					<Youtube url="something" />
					<Discord url="something" />
					<Medium url="something" />
				</section>
			)}
		</>
	);
}
