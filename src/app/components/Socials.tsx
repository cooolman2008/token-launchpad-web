"use client";

import { useState, useEffect } from "react";
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

	return (
		<>
			{show && (
				<section className="w-full py-12 px-4 flex flex-wrap justify-center bg-gradient-to-r from-blue-950/30">
					<Telegram url="https://t.me/SAFULauncherPortal" />
					<Twitter url="https://x.com/SAFUlauncher" />
					<Etherscan url="#" />
					<Youtube url="https://www.youtube.com/@Safulauncher" />
					<Discord url="#" />
					<Medium url="#" />
				</section>
			)}
		</>
	);
}
