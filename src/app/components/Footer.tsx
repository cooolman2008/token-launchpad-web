"use client";

import { useState, useEffect } from "react";
import Links from "./Navigation/Links";
import Socials from "./Socials";

export default function Footer() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	useEffect(() => {
		if (show) {
		}
	}, [show]);

	return (
		<>
			{show && (
				<footer className="w-full flex flex-col items-center pb-8 bg-gradient-to-r from-blue-950/30 z-10 relative">
					<Socials />
					<div className="flex max-md:flex-col text-xl font-light text-gray-400 mb-12 lg:hidden">
						<Links type={3} />
					</div>
					<p className=" text-gray-400">© 2024 All rights reserved.</p>
				</footer>
			)}
		</>
	);
}
